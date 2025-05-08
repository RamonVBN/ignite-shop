import axios from "axios";
import { createContext, ReactNode, useEffect, useState } from "react";


type ShopCartItemProps = {
    name: string,
    imageUrl: string,
    price: string,
    defaultPriceId: string,
    quantity: number,
}

export type LineItem = {
    price: string,
    quantity: number
}

type ShopCartContextProps = {
    shopCartItems: ShopCartItemProps[]
    addProduct: (shopCartItem: ShopCartItemProps) => void
    removeProduct: (priceId: string) => void
    handleBuyProduct: () => void
    isCreatingCheckout: boolean
    isAddingItem: boolean
}

export const ShopCartContext = createContext({} as ShopCartContextProps )

export function ShopCartProvider({children}: {children: ReactNode}){

    const [shopCartItems, setShopCartItems] = useState<ShopCartItemProps[]>([])
    const [lineItems, setLineItems] = useState<LineItem[]>([])
    const [isCreatingCheckout, setIsCreatingCheckout] = useState(false)

    const [isAddingItem, setIsAddingItem] = useState(false)

    function addProduct(shopCartItem: ShopCartItemProps){

        try {
        setIsAddingItem(true)

        setTimeout(() => {
            const sameItemIndex = shopCartItems.findIndex((item) =>  item.defaultPriceId === shopCartItem.defaultPriceId)

        if (sameItemIndex !== -1) {

            shopCartItems[sameItemIndex].quantity += 1
            setShopCartItems((prevState) => [...prevState])
        
            lineItems[sameItemIndex].quantity += 1
            setLineItems((prevState) => [...prevState])
        
        }else {
            setShopCartItems((prevState) => [...prevState, shopCartItem])
            setLineItems((prevState) => [...prevState, {
                price: shopCartItem.defaultPriceId,
                quantity: shopCartItem.quantity
            }])
        } 
        
        setIsAddingItem(false)
        }, 600);
        
        } catch (error) {
            console.log(error)
        }
       
    }

    function removeProduct(priceId: string){

        const indexToRemove = shopCartItems.findIndex((item) => item.defaultPriceId === priceId)

        if (indexToRemove !== -1) {

            const newShopCartItems = shopCartItems.toSpliced(indexToRemove, 1)
            setShopCartItems(newShopCartItems)

            const newLineItems = lineItems.toSpliced(indexToRemove, 1)
            setLineItems(newLineItems)
        }

    }

    async function handleBuyProduct(){
        setIsCreatingCheckout(true)
        

        if (lineItems.length < 1) {
            
            setTimeout(() => {
                
                alert('Sua sacola de compras está vazia.')
                setIsCreatingCheckout(false)
                return
            }, 1200);
            
            return
        }
    
        try {
            const response = await axios.post('/api/checkout', {
                lineItems: lineItems
            })

            const {checkoutUrl} = response.data

            window.location.href = checkoutUrl

        } catch (error) {
            console.log(error)
            alert('Falha ao redirecionar ao checkout')
        }
    }

    useEffect(() => {
        
        const cloudShopCartItems = localStorage.getItem('@ignite-shop:shopCartItems')
        const cloudLineItems = localStorage.getItem('@ignite-shop:lineItems')

        if (cloudShopCartItems && cloudLineItems) {
            
            setShopCartItems(JSON.parse(cloudShopCartItems))
            setLineItems(JSON.parse(cloudLineItems))
        }

    }, [])

    useEffect(() => {

        localStorage.setItem('@ignite-shop:shopCartItems', JSON.stringify(shopCartItems))
        localStorage.setItem('@ignite-shop:lineItems', JSON.stringify(lineItems))

    }, [shopCartItems, lineItems])

    return (
        <ShopCartContext.Provider value={{shopCartItems, addProduct, removeProduct, handleBuyProduct, isCreatingCheckout, isAddingItem}}>
            {children}
        </ShopCartContext.Provider>
    )

}