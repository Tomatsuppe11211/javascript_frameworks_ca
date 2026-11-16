
export default function CheckSale({price, discount}: {price: number, discount: number}){
    if(discount < price){
        return (
           <>
            <p className="text-sm md:text-base text-gray-400 line-through">{price} NOK</p>
            <p className="text-sm md:text-base">{discount} NOK</p>
            <p className="text-xs md:text-base lg:text-lg absolute h-10 w-10 md:h-12 md:w-12 lg:h-15 lg:w-15 flex text-center items-center justify-center top-2 left-2 border rounded-full bg-white p-2 text-red-400"><strong>Sale</strong></p> 
           </>
        )
    } else {
        return <p className="text-sm md:text-base">{price} NOK</p>
    }
}