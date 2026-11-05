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
    
    // Checkign character length for each product and reduce them to
    // 10 characters if longer.
    for(let i = 0; i < products.length; i++){
        if(products[i].title.length > 10){
            products[i].title =  products[i].title.substring(0 , 10) + '...'
        }
    }

    function CheckSale({price, discount}: {price: number, discount: number}){
        if(discount < price){
            return (
               <>
                <p className="text-sm">{discount} NOK</p>
                <p className="absolute text-xs h-10 w-10 flex justify-center items-center top-2 left-2 border rounded-full bg-white p-2 text-red-400"><strong>Sale</strong></p> 
               </>
               
            )
        } else {
            return <p className="text-sm">{price} NOK</p>
        }
    }
    
    console.log(products)



    return(
        <div className="flex justify-center">
            <ul className="w-[90%] flex flex-row flex-wrap justify-between">
                {products.map((p) => (
                    <li key = {p.id} className="mt-5 w-24 relative">
                        <a href = {`products/${p.id}`}>
                            <img
                                src = {p.image.url}
                                alt = {p.image.alt}
                                style = {{height: '6rem', width: '6rem'}}
                            />
                            
                            <p className="text-sm"><strong>{p.title}</strong></p>
                            <CheckSale price={p.price} discount={p.discountedPrice}/>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}