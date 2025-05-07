import { ShopCartDetails, ShopCartImage, ShopCartItemContainer } from "@/styles/pages/app";
import Image from "next/image";
import imageExample from '../assets/Type=2_explorer-t-shirt 1.png'
import { useContext } from "react";
import { ShopCartContext } from "@/contexts/ShopCartContext";

type ShopCartItemProps = {
    itemPriceId: string
    itemName: string,
    itemPrice: string,
    itemImageUrl: string,
    itemQuantity: number
}

export function ShopCartItem({itemName, itemPrice, itemImageUrl, itemPriceId, itemQuantity}: ShopCartItemProps){

    const {removeProduct} = useContext(ShopCartContext)

    function handleRemoveProduct(){
        removeProduct(itemPriceId)
    }

    return (
        <ShopCartItemContainer>

        <ShopCartImage>
            <Image width={100} height={100} src={itemImageUrl} alt=""/>
        </ShopCartImage>

            <ShopCartDetails>
                <h4>{itemName}</h4>
                <span>
                    {itemPrice}
                </span>

                <div>
                <button onClick={handleRemoveProduct}>Remover</button>

                <span>Quantidade: {itemQuantity} </span>
                </div>
            </ShopCartDetails>
        </ShopCartItemContainer>
    )
}