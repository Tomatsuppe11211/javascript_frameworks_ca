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
        <div className="flex w-full justify-center">
            <button
                className="
                    text-lg shadow-lg dark:shadow-green-500/50 
                    shadow-black bg-green-500 p-2 cursor-pointer 
                    w-9/10 md:w-full md:rounded-md lg:rounded-lg text-white
                    border border-black
                "
                onClick={addToCart}
            >
                Add to Cart
            </button>


            {addMessage && (
                <div className="
                    fixed flex flex-col gap-2 bottom-0 right-0 z-50 
                    bg-green-500 p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 
                    md:rounded-tl-lg text-white border border-black
                ">
                    <h2 className="text-lg lg:text-xl xl:text-2xl w-9/10">Success!</h2>
                    <p className="text-sm md:text-base xl:text-lg w-9/10">{addMessage}</p>
                </div>
            )}
        </div>
    )
}