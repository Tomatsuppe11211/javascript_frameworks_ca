import CheckSale from "@/app/components/CheckSale"

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


function CheckSaveMoney({price, discount}: {price: number, discount: number}){
    const save = price - discount

    return <p className="text-lg">You will save {save} NOK on this product.</p>
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
    console.log(product)

    


    return(
        <div className="flex flex-col items-center gap-5">
            <img
                src = {product.image.url}
                alt = {product.image.alt}
                style = {{height: '20rem', width: '100vw'}}
            />

            <h1 className="text-2xl">{product.title}</h1>

            <div className="w-[90%]">
                <CheckSale price={product.price} discount={product.discountedPrice} />
                <CheckSaveMoney price={product.price} discount={product.discountedPrice} />
            </div>
            
        </div>
    )
}