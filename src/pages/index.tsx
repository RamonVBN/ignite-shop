import { AddProductSlideButton, HomeContainer, Product } from "@/styles/pages/home"
import Image from "next/image"
import Head from "next/head"
import { GetStaticProps } from "next"

import {useKeenSlider} from 'keen-slider/react'
import 'keen-slider/keen-slider.min.css'

import { stripe } from "@/lib/stripe"
import Stripe from "stripe"

import { Handbag } from "phosphor-react"



interface HomeProps {
  products: {
  id: string
  name: string,
  imageUrl: string,
  price: string,
  defaultPriceId: string

  }[]
}

export default function Home({products}: HomeProps) {


  const [sliderRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    mode: 'snap',
    slides: {
      perView: 2,
      spacing: 48,
      origin: 'center',
    },
    loop: true,
    renderMode: 'performance',
    
  })


  return (
  <>
  <Head>
    <title>Home | Ignite Shop</title>
  </Head>
    <HomeContainer ref={sliderRef} className="keen-slider">
      
      {
        products && products.map((product, i) => {
          return (
        <Product prefetch={false} href={`/product/${product.id}`} key={product.id} className={`keen-slider__slide number-slide${i + 1}`} >
          <Image src={product.imageUrl} alt="" width={520} height={480}/>
          <footer>
            <div>
              <strong>{product.name}</strong>
              <span>{product.price}</span>
            </div>
            
          <AddProductSlideButton>

            <Handbag size={32}/>
          </AddProductSlideButton>
          </footer>

      </Product>
          )
        })
      }
      
    </HomeContainer>
  </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const response = await stripe.products.list({
    expand: ['data.default_price']
  })
  

  const products = response.data.map((product) => {

  const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount ? (price.unit_amount / 100).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'}) : null,
      defaultPriceId: price.id
      
    }
  })

  return {
    props: {
      products
    },
    revalidate: 60 * 60 * 2 // 2 horas
  }
}
