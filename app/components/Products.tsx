
interface Review{
    id: string,
    username: string,
    rating: number,
    description: string
}

interface ProductImage{
    src: string,
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
    const response = await fetch('https://v2.api.noroff.dev/online-shop')

    if(!response.ok){
        console.error(`Failed to fetch games`, response.statusText)
        return <p>Coult not fetch games. Try again later.</p>
    }

    const result: apiResponse = await response.json()

    const products = result

    console.log(products.data)

    return(
        <>
            <h1>Hello world!</h1>
        </>
    )
}