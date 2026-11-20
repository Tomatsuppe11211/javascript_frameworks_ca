'use client'

import useCartStore from '../stores/cartStore'
import Image from 'next/image'

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
    const items = useCartStore((state) => state.items)
    const removeItem = useCartStore((state) => state.removeItem)
    const updateQuantity = useCartStore((state) => state.updateQuantity)

    if(items.length === 0){
        return <p>Your cart is empty</p>
    }

    const totalItems = items.reduce((total: number, item: CartProduct) => total + item.quantity, 0)
    const totalPrice = items.reduce((total: number, item: CartProduct) => total + item.price * item.quantity, 0)

    return(
        <div className='w-[90%] flex flex-col gap-5 md:w-1/2 lg:w-1/3'>
            <h1 className='text-2xl text-center'>Your cart</h1>
            <ul className='w-full flex flex-col gap-5 border-b'>
                {items.map((item: CartProduct) => (
                    <li
                        key={item.id}
                        className='relative w-full flex flex-col gap-1 p-2 border-t'
                    >
                        <div className='flex flex-row w-full justify-between items-center'>
                            <div className='flex flex-col w-full gap-3'>
                                <h2 className='text-lg'>{item.title}</h2>
                                <p className='text-sm'>Price: {item.price} NOK</p>
                                <p className='text-sm'>Quantity: {item.quantity}</p>

                                {/* Quantity buttons*/}
                                <div className='flex flex-row w-4/5 gap-2 mb-2 mt-2'>
                                    <button
                                        className='border p-1 w-full text-xs cursor-pointer hover:bg-red-500 hover:font-bold'
                                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                    >
                                        -
                                    </button>

                                    <button
                                        className='border p-1 w-full text-xs cursor-pointer hover:bg-green-500 hover:font-bold'
                                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                    >
                                        +
                                    </button>

                                    <button
                                        className='border p-1 w-full text-xs cursor-pointer hover:bg-red-500 hover:font-bold'
                                        onClick={() => removeItem(item.id)}
                                    >
                                        Remove
                                    </button>
                                </div>
                            </div>

                            <Image
                                className='w-35 h-25'
                                src={item.image.url}
                                alt={item.image.alt}
                                height={10}
                                width={80}
                                loading='eager'
                            />
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
                        shadow-green-500/50 mt-5 bg-green-500 
                        font-bold cursor-pointer
                    '
                >
                    Purchase
                </button>
            </div>
            
        </div>
    )
}