import { ImageContainer, ProdcutDetails, ProductContainer } from "@/styles/pages/product";
import Image from "next/image";
import { GetStaticPaths, GetStaticProps } from "next";
import { stripe } from "@/lib/stripe";
import Stripe from "stripe";
import { useContext, useState } from "react";
import Head from "next/head";
import { ShopCartContext } from "@/contexts/ShopCartContext";


interface ProductProps {
    product: {
    id: string
    name: string,
    imageUrl: string,
    price: string,
    description: string,
    defaultPriceId: string
    }
  }

export default function Product({product}: ProductProps){

    const {addProduct, isAddingItem} = useContext(ShopCartContext)

    async function handleAddProduct(){

        addProduct({
            name: product.name,
            imageUrl: product.imageUrl,
            price: product.price,
            defaultPriceId: product.defaultPriceId,
            quantity: 1,
        })
        
    }

    return (
        <>
        <Head>
            <title>{product.name} | Ignite Shop</title>
        </Head>
        <ProductContainer>
            <ImageContainer>
                <Image width={520} height={480} src={product.imageUrl} alt="" />
            </ImageContainer>

            <ProdcutDetails>
                <h1>{product.name}</h1>
                <span>{product.price}</span>

                <p>{product.description}</p>

                <button disabled={isAddingItem} onClick={handleAddProduct}>Colocar na sacola</button>
            </ProdcutDetails>
            
        </ProductContainer>
        </>
)
}

export const getStaticPaths: GetStaticPaths = async () => {

    return {
        paths: [
            {params: {id: 'prod_SDkRtcP2BJeT0F'}}
        ],

        fallback: 'blocking'
    }
}

export const getStaticProps: GetStaticProps<any, { id: string }> = async ({params}) => {

    if (!params) {
        
        return {
            notFound: true
        }
    }

    const productId = params.id

    const product = await stripe.products.retrieve(productId, {
        expand: ['default_price']
    })

    const price = product.default_price as Stripe.Price

    return {
        props: {
            product: {
                id: product.id,
                name: product.name,
                imageUrl: product.images[0],
                price: price.unit_amount ? (price.unit_amount / 100).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) : null,
                description: product.description,
                defaultPriceId: price.id,
                }
        },

        revalidate: 60 * 60 * 1 // 1 hora
    }
}