import { globalStyles } from "@/styles/global";
import type { AppProps } from "next/app";

import {  ShopCartProvider } from "@/contexts/ShopCartContext"
import { Layout } from "@/components/Layout";

globalStyles()


export default function App({ Component, pageProps }: AppProps) {

  return (
  
  <ShopCartProvider>
    <Layout>
    <Component {...pageProps} />
    </Layout>
  </ShopCartProvider>
  

)
}
