import CheckSingleSale from "@/app/components/CheckSingleSale"
import CheckTags from "@/app/components/CheckTags"

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

    const productTags = result.data.tags
    
    return(
        <div className="flex flex-col items-center gap-5 mb-20">
            <img
                src = {product.image.url}
                alt = {product.image.alt}
                style = {{height: '20rem', width: '100vw'}}
            />

            <div className='flex flex-col gap-1 w-[90%]'>
                <h1 className="text-2xl">{product.title}</h1>
                <CheckTags tags={productTags}/>
            </div>
            

            <div className="w-[90%]">
                <CheckSingleSale price={product.price} discount={product.discountedPrice} />
            </div>

            <p className="text-lg w-[90%]">{product.description}</p>
            
            <button className="text-lg bg-green-400 p-2 cursor-pointer">Add to cart</button>

            <div className="flex flex-col gap-5 w-[90%] mt-10">
                <p className="text-lg">Rating: {product.rating}</p>
                <h2 className="text-2xl">Reviews</h2>
            </div>
        </div>
    )
}