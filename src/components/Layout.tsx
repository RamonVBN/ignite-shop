import { BagContainer, Container, Header, ShopCartContainer, ShopCartCount, ShopCartFooter, ShopCartHeaderButtonEmpty, ShopCartHeaderButtonFull } from "@/styles/pages/app"
import Image from "next/image"
import Link from "next/link"
import { Handbag, MaskSad, X } from "phosphor-react"
import { ShopCartItem } from "./ShopCartItem"
import { ReactNode, useContext, useEffect, useState } from "react"
import { ShopCartContext } from "@/contexts/ShopCartContext"
import logoImg from '../assets/Logo.png'
import { useRouter } from "next/router"

export function Layout({children}: {children: ReactNode}){

  const router = useRouter()
  const params = router.query

  const {shopCartItems, handleBuyProduct, isCreatingCheckout} = useContext(ShopCartContext)

  const [isShopCartOpen, setIsShopCartOpen] = useState(false)
  
  const [isShopCartFull, setIsShopCartFull] = useState(false)

  function buyItems(){
    handleBuyProduct()
  }

  const totalQuantity: number = shopCartItems.reduce((accumulator, currentValue) => {
    return accumulator += currentValue.quantity
  }, 0)

  const totalValue: number = shopCartItems.reduce((accumulator, currentValue) => {

    return accumulator += Number(currentValue.price.replace('R$', '').replace(',', '.')) * currentValue.quantity

  }, 0)

  useEffect(() => {

    if (shopCartItems.length >= 1) {

      setIsShopCartFull(true)
      
    }else {
      setIsShopCartFull(false)
    }

  }, [shopCartItems])

  return (
<Container>
    <Header headerJustify={params.session_id? 'success': 'normal'}>
      <Link href={'/'}>
      <Image src={logoImg} alt="" />
      </Link>
      {
        isShopCartFull ? 
        <ShopCartHeaderButtonFull onClick={() => setIsShopCartOpen(true)}>
        <ShopCartCount>{totalQuantity}</ShopCartCount>
        <Handbag size={24}/>
      </ShopCartHeaderButtonFull> :  !params.session_id &&

       <ShopCartHeaderButtonEmpty onClick={() => setIsShopCartOpen(true)}>
        <Handbag size={24}/>
      </ShopCartHeaderButtonEmpty>
      }
    </Header>

    {isShopCartOpen && <ShopCartContainer>

      <div>
        <header>
          <button onClick={() => setIsShopCartOpen(false)}>
          <X size={24} color="#8D8D99" />
          </button>
        </header>
        <section>
          <h3>Sacola de compras</h3>
          <BagContainer scrollVariant={shopCartItems.length > 4? 'scroll': 'normal'}>
            {
              shopCartItems.length >= 1? shopCartItems.map((item) => {
                return (
                  <ShopCartItem key={item.defaultPriceId} itemQuantity={item.quantity} itemPriceId={item.defaultPriceId} itemName={item.name} itemPrice={item.price} itemImageUrl={item.imageUrl}/>
                )
              })
              :
              <p>
                <MaskSad size={32} weight="fill" />
                <span>Infelizmente sua sacola de compras está vazia...</span>
              </p>
            }
          </BagContainer>
        </section>
      </div>

      <ShopCartFooter>

        <div>
            <aside>
              <span>Quantidade</span>
              <span>{totalQuantity} itens</span>
            </aside>

            <aside>
            <span>Valor total</span>
            <span>{totalValue.toLocaleString('pt-BR', {
              style: 'currency',
              currency: 'BRL'
            })}</span>
            </aside>

        </div>

        <button disabled={isCreatingCheckout} onClick={buyItems}>Finalizar Compra</button>
      </ShopCartFooter>

      </ShopCartContainer>
}

    {children}
  </Container>
    )
}