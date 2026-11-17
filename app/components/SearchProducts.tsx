'use client'

import React, { useState, useEffect, useMemo } from 'react'
import Products from './Product'

interface Review{
    id: string,
    username: string,
    rating: number,
    description: string
}

interface ProductImage{
    url: string,
    alt: string
}

interface Product{
    id: string,
    title: string,
    description: string,
    price: number,
    discountedPrice: number,
    image: ProductImage,
    rating: number,
    tags: string[],
    reviews: Review[]
}


const API_URL = 'https://v2.api.noroff.dev/online-shop'


export default function SearchAllProducts(){
    const [ allProducts, setAllProducts ] = useState([])
    const [ isLoading, setIsLoading ] = useState(true)
    const [ error, setError ] = useState(null)
    const [ searchProduct, setSearchProduct ] = useState('')

    useEffect(() => {
        const fetchAllProducts = async () => {
            setIsLoading(true)
            setError(null)

            try{
                const response = await fetch(API_URL)

                if(!response.ok){
                    throw new Error(`API failed: ${response.status}`)
                }

                const result = await response.json()

                const products = result.data

                for(let i = 0; i < products.length; i++){
                    if(products[i].title.length > 10){
                        products[i].title =  products[i].title.substring(0 , 10) + '...'
                    }
                }

                setAllProducts(products || [])
            } catch(error){
                setError(error.message)
            } finally{
                setIsLoading(false)
            }
        }

        fetchAllProducts()
    }, [])

    const processedProducts = useMemo(() => {
        let productsToProcess = [...allProducts]

        if(searchProduct.trim() !== ''){
            const lowerSearchProduct = searchProduct.toLowerCase()

            productsToProcess = productsToProcess.filter(
                (product: Product) => 
                    product.title.toLowerCase().includes(lowerSearchProduct)
                || (product.description && product.description.toLowerCase().includes(lowerSearchProduct))
            )
        }

        return productsToProcess
    }, [ allProducts, searchProduct ])

    if(isLoading) return <p>Loading products</p>
    if(error) return <p className='text-red-500'>Error: {error}</p>


    return(
        <div className='flex flex-col items-center justify-center md:justify-start w-[90%]'>
            <div className='flex flex-row gap-2 h-fit items-center justify-start mt-5 w-full'>
                <label htmlFor='productSearch' className='text-sm md:text-base lg:text-lg'>Search:</label>

                <input
                    type='text'
                    id='productSearch'
                    placeholder='Search...'
                    value = {searchProduct}
                    onChange={(e) => setSearchProduct(e.target.value)}
                    className='p-1 text-sm md:text-base lg:text-lg border rounded-md w-1/2 lg:w-1/3'
                />

                <button
                    onClick={() => {
                        setSearchProduct('')
                    }}
                    className='p-1 text-sm md:text-base lg:text-lg border rounded-md shadow-md shadow-black'
                >
                    Reset
                </button>
            </div>

            <div className='flex w-fit'>
                {processedProducts.length > 0 ? (
                    <ul className='w-full flex flex-row flex-wrap justify-between p-2 gap-2 md:gap-5'>
                        {processedProducts.map((product: Product) => (
                            <Products key={product.id} product={product}/>
                        ))}
                    </ul>
                ) : (
                    <p className='text-sm'>No products found.</p>
                )
            
                }
            </div>
        </div>
    )
}