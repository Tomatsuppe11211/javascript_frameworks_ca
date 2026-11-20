import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware"

const useCartStore = create(
    persist(
        (set) => ({
            items: [],

            addItem: (product) => 
                set((state) => {
                    const existingItem = state.items.find(
                        (item) => item.id === product.id
                    )
                
                    if(existingItem){
                        const updateditems = state.items.map(
                            (item) => 
                                item.id === product.id
                                ? {...item, quantity: item.quantity + 1}
                                : item
                        )
                    
                        return { items: updateditems }
                    } else {
                        const newItem = {...product, quantity: 1}
                        const updateditems = [...state.items, newItem]
                        return {items: updateditems}
                    }
            }),
        
            removeItem: (id) =>
                set((state) => {
                    const updateditems = state.items.filter(
                        (item) => item.id !== id
                    )
                
                    return { items: updateditems }
            }),

            updateQuantity: (id, quantity) =>
                set((state) => {
                    if(quantity <= 0){
                        const updateditems = state.items.filter(
                            (item) => item.id !== id
                        )
                    
                        return { items: updateditems}
                    } else {
                        const updateditems = state.items.map((item) => 
                            item.id === id
                            ? { ...item, quantity: quantity }
                            : item
                        )
                    
                        return {items: updateditems}
                    }
            }),
        
            clearCart: () => set({items: []})
        }), 
        {
            name: 'cart',
            storage: createJSONStorage(() => sessionStorage)
        }  
    )     
)

export default useCartStore