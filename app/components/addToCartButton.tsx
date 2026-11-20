'use client'

import useCartStore from "../stores/cartStore"
import { useState } from "react"

interface AddCartProduct{
    id: string,
    title: string,
    price: number,
    discount: number,
    image: {
        url: string,
        alt: string
    }
}

export default function AddToCartButton(product: AddCartProduct){
    const addItem = useCartStore((state) => state.addItem)

    const [ addMessage, setAddMessage ] = useState('')
    
    //Using discount price if the product has a discount
    const itemPrice = product.discount < product.price ? product.discount : product.price

    function addToCart(){
        addItem({
                id: product.id,
                title: product.title,
                price: itemPrice,
                image: product.image
        })

        setAddMessage(`${product.title} has been added to your cart`)

        setTimeout(() => setAddMessage('')
        , 3000);
    }

    return(
        <div>
            <button
                className="text-lg bg-green-400 p-2 cursor-pointer w-[90%] md:w-full"
                onClick={addToCart}
            >
                Add to Cart
            </button>


            {addMessage && (
                <div className="fixed flex flex-col gap-2 bottom-0 right-0 z-50 bg-green-500 p-4 w-fit">
                    <h2 className="text-white text-lg">Success!</h2>
                    <p className="text-white">{addMessage}</p>
                </div>
            )}
        </div>
    )
}