import { stripe } from "@/lib/stripe";
import { ImageContainer, ItemsContainer, SuccessContainer } from "@/styles/pages/success";
import { GetServerSideProps } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Stripe from "stripe";

interface SuccessProps  {
    customerName: string
    quantity: number
    productsImages:  string[]
}

export default function Success({customerName, productsImages, quantity}: SuccessProps){


    return (
        <>
        <Head>
        <title>Compra efetuada | Ignite Shop</title>
        <meta name="robots" content="noindex" />
        </Head>
        <SuccessContainer>
            <h1>Compra efetuada!</h1>

            <ItemsContainer style={{left: 22 * (productsImages.length - 1)}} >
                {
                
                    productsImages.map((image, i) => (
                        <ImageContainer key={i}  style={{left: -52 * i}}>
                            <Image src={image} width={120} height={110} alt=""/>
                        </ImageContainer>
                    ))
                }
            </ItemsContainer>

            <p>
            Uhuul <strong>{customerName}</strong>, sua compra de <strong>{quantity} camiseta(s)</strong> já está a caminho da sua casa. 
            </p>

            <Link href={'/'}>
                Voltar ao catálogo
            </Link>
        </SuccessContainer>
        </>
    )
}


export const getServerSideProps: GetServerSideProps = async ({query}) => {

    
    if (!query.session_id) {
        
        return {
            redirect: {
                destination: '/',
                permanent: false
            }
        }
    }
    
    const sessionId = String(query.session_id)

    const session = await stripe.checkout.sessions.retrieve(sessionId, {
        expand: ['line_items', 'line_items.data.price.product']
    })

    const customerName = session.customer_details?.name

    const data = session.line_items.data 

    const quantity = data.reduce((acc, currentValue) => {

        return acc += currentValue.quantity
    }, 0)

    const productsImages = data.reduce((acc, currentValue): string[] => {

        const product = currentValue.price.product as Stripe.Product

        acc.push(product.images[0])

        return acc

    }, [])

    

    return  {
        props: {
        productsImages,
        customerName,
        quantity,
        }
    }
}