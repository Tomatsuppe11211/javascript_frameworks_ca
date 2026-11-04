import React from "react"

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
    reviews: Review
}

interface apiResponse{
    data: Product[]
}


export default async function AllProducts(){
    const response = await fetch('https://v2.api.noroff.dev/online-shop', {
        next: {revalidate: 3600}
    })

    if(!response.ok){
        throw new Error('Could not fetch products')
    }

    const result: apiResponse = await response.json()

    const products = result.data

    console.log(products)

    return(
        <div className="flex justify-center">
            <ul className="w-[90%] flex flex-row flex-wrap justify-between">
                {products.map((p) => (
                    <li key = {p.id} className="text-lg mt-5">
                        <a href = {`products/${p.id}`}>
                            <img 
                                src = {p.image.url}
                                alt = {p.image.alt}
                                style = {{
                                    width: '6rem',
                                    height: '6rem'
                                }}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}