'use client'

import { useState } from 'react'
import useCartStore from '../stores/cartStore'
import Image from 'next/image'
import Link from 'next/link'
import { redirect, RedirectType } from 'next/navigation'

interface CartProduct{
    id: string,
    title: string,
    price: number,
    image: {
        url: string,
        alt: string
    },
    quantity: number
}

export default function CartDisplay(){
    const [ confirmMessage, setConfirmMessage ] = useState('')
    const [ removeMessage, setRemoveMessage ] = useState('')

    const items = useCartStore((state) => state.items)
    const removeItem = useCartStore((state) => state.removeItem)
    const updateQuantity = useCartStore((state) => state.updateQuantity)
    const clearCart = useCartStore((state) => state.clearCart)

    if(items.length === 0 && !confirmMessage && !removeMessage){
        return <p className='text-lg md:text-xl'>Your cart is empty</p>
    }

    const totalItems = items.reduce((total: number, item: CartProduct) => total + item.quantity, 0)
    const totalPrice = items.reduce((total: number, item: CartProduct) => total + item.price * item.quantity, 0)

    function confirmPurchase(){
        setConfirmMessage(`You have successfully purchased ${totalItems} items!`)
        
        clearCart()

        setTimeout(() => { 
            setConfirmMessage('')
            
            redirect('/confirmed-purchase', RedirectType.replace) 
        }, 2000);
    }

    return(
        <div className='w-[90%] flex flex-col gap-5 md:w-1/2 lg:w-1/3 xl:w-1/4'>
            <h1 className='text-2xl text-center'>Checkout</h1>
            <p>Total items: {totalItems}</p>
            <ul className='w-full flex flex-col gap-5 border-b'>
                {items.map((item: CartProduct) => (
                    <li
                        key={item.id}
                        className='relative w-full flex flex-col gap-1 p-2 border-t'
                    >
                        <div className='flex flex-row w-full justify-between items-center'>
                            <div className='flex flex-col w-full gap-3'>
                                <h2 className='text-lg'>{item.title}</h2>
                                <p className='text-sm md:text-base'>Price: {item.price} NOK</p>
                                <p className='text-sm md:text-base'>Quantity: {item.quantity}</p>

                                {/* Quantity buttons*/}
                                <div className='flex flex-row w-4/5 gap-2 mb-2 mt-2'>
                                    <button
                                        className='
                                            border p-1 w-full text-xs md:text-sm cursor-pointer 
                                            hover:bg-red-500 hover:font-bold hover:text-white
                                        '
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    >
                                        -
                                    </button>

                                    <button
                                        className='
                                            border p-1 w-full text-xs md:text-sm cursor-pointer 
                                            hover:bg-green-500 hover:font-bold hover:text-white
                                        '
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>

                                    <button
                                        className='
                                            border p-1 w-full text-xs md:text-sm cursor-pointer 
                                            hover:bg-red-500 hover:font-bold hover:text-white
                                        '
                                        onClick={() => {
                                            removeItem(item.id)

                                            setRemoveMessage(`You have removed ${item.title} from your cart`)

                                            setTimeout(() => setRemoveMessage(''), 2000);
                                        }}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>

                            <Link href={`/products/${item.id}`}>
                                <Image
                                    className='w-35 h-25'
                                    src={item.image.url}
                                    alt={item.image.alt}
                                    height={10}
                                    width={80}
                                    loading='eager'
                                />
                            </Link>
                        </div>
                    </li>
                ))}    
            </ul>
            <div className='flex flex-col p-2 gap-2'>
                <p>Total items: {totalItems}</p>
                <p>Total sum: {totalPrice.toFixed(2)} NOK</p>

                <button 
                    className='
                        text-lg border border-black shadow-lg 
                        shadow-black dark:shadow-green-500/50 mt-5 bg-green-500 
                        font-bold cursor-pointer text-white w-full
                    '
                    onClick={confirmPurchase}
                >
                    Purchase
                </button>
            </div>

            {confirmMessage && (
                <div className='
                    fixed flex flex-col gap-2 bottom-0 right-0 z-50 
                    bg-green-500 p-4 w-full md:w-1/2 lg:w-1/3 
                    xl:w-1/4 md:rounded-tl-lg border border-black 
                    text-white
                '>
                    <h2 className="text-lg lg:text-xl xl:text-2xl">Success!</h2>
                    <p className="text-sm md:text-base xl:text-lg">{confirmMessage}</p>
                </div>
            )}

            {removeMessage && (
                <div className='
                    fixed flex flex-col gap-2 bottom-0 right-0 z-50 text-white
                    bg-red-500 p-4 w-full md:w-1/2 lg:w-1/3 xl:w-1/4 
                    md:rounded-tl-lg border border-black
                '>
                    <h2 className="text-lg lg:text-xl xl:text-2xl">Product Removed</h2>
                    <p className="text-sm md:text-base xl:text-lg">{removeMessage}</p>
                </div>
            )}
        </div>
    )
}