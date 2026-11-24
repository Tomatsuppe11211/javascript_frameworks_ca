import CheckSingleSale from "@/app/components/CheckSingleSale"
import CheckTags from "@/app/components/CheckTags"
import CheckReviews from "@/app/components/CheckReviews"
import AddToCartButton from "@/app/components/addToCartButton"
import Image from 'next/image'

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

interface apiResponse {
    data: Product
}


export default async function ProductPage({
        params,
    }: {
        params: Promise<{productsId: string}>
    }) {
    const { productsId } = await params    

    const response = await fetch(`https://v2.api.noroff.dev/online-shop/${productsId}`)

    if(!response.ok){
        throw new Error('Could not fetch product')
    }

    const result:apiResponse  = await response.json()

    const product = result.data
    
    return(
        <div className="relative flex flex-col items-center -mt-15 md:mt-0 gap-5 mb-20 md:w-1/2 lg:w-2/5 xl:w-1/3 2xl:w-1/4">
            <Image
                className="h-80 lg:h-100 w-full"
                src = {product.image.url}
                alt = {product.image.alt}
                height = {400}
                width = {500}
                loading="eager" //making image loading immediately when rendering
            />

            <div className='flex flex-col gap-1 w-[90%] md:w-full'>
                <h1 className="text-2xl">{product.title}</h1>
                <CheckTags tags={product.tags}/>
                <p className="text-sm md:text-base">Rating: {product.rating}</p>
            </div>
            

            <div className="w-[90%] md:w-full">
                <CheckSingleSale price={product.price} discount={product.discountedPrice} />
            </div>

            <p className="text-lg w-[90%] md:w-full">{product.description}</p>
            
            <AddToCartButton 
                id={product.id} 
                title={product.title} 
                price={product.price} 
                discount={product.discountedPrice}
                image={{
                    url: product.image.url,
                    alt: product.image.alt
                }}
            />

            <CheckReviews reviews={product.reviews}/>
        </div>
    )
}