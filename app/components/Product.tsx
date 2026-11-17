import Image from "next/image"
import CheckSale from "./CheckSale"

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

export default function Products({ product }: { product: Product}){
    return(
        <li className="mt-5 w-fit relative">
            <a href = {`products/${product.id}`}>
                <Image
                    className="h-24 w-24 md:h-36 md:w-36 lg:h-48 lg:w-48"
                    src = {product.image.url}
                    alt = {product.image.alt}
                    height = {200}
                    width = {100}
                />

                <p className="text-sm md:text-base"><strong>{product.title}</strong></p>
                <CheckSale price={product.price} discount={product.discountedPrice}/>
                <p className="text-xs md:text-sm"><strong>Rating: {product.rating}</strong></p>
            </a>
        </li>
    )
}