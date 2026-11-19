'use client'

import useCartStore from '../stores/cartStore'

export default function CartDisplay(){
    
    const items = useCartStore((state) => state.items)
    const removeItem = useCartStore((state) => state.removeItem)
    const updateQuantity = useCartStore((state) => state.updateQuantity)

    if(items.length === 0){
        return <p>Your cart is empty</p>
    }

    return(
        <div>
            <h1>Your cart</h1>
            <ul>
                {items.map((item) => {
                    <li
                        key={item.id}
                    >
                        <h2>{item.title}</h2>
                        <p>Price: {item.price}</p>

                        <div>
                            <button
                                onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            >
                                -
                            </button>

                            <button
                                onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            >
                                +
                            </button>

                            <button
                                onClick={removeItem(item.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}