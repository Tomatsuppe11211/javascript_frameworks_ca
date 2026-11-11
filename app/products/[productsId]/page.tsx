import CheckSingleSale from "@/app/components/CheckSingleSale"
import CheckTags from "@/app/components/CheckTags"
import CheckReviews from "@/app/components/CheckReviews"

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
        <div className="flex flex-col items-center gap-5 mb-20">
            <img
                src = {product.image.url}
                alt = {product.image.alt}
                style = {{height: '20rem', width: '100vw'}}
            />

            <div className='flex flex-col gap-1 w-[90%]'>
                <h1 className="text-2xl">{product.title}</h1>
                <CheckTags tags={product.tags}/>
                <p className="text-sm">Rating: {product.rating}</p>
            </div>
            

            <div className="w-[90%]">
                <CheckSingleSale price={product.price} discount={product.discountedPrice} />
            </div>

            <p className="text-lg w-[90%]">{product.description}</p>
            
            <button className="text-lg bg-green-400 p-2 cursor-pointer w-[90%]">Add to cart</button>

            <CheckReviews reviews={product.reviews}/>
        </div>
    )
}