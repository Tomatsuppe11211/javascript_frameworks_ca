
export default function CheckSale({price, discount}: {price: number, discount: number}){
    if(discount < price){
        return (
           <>
            <p className="text-sm text-gray-400 line-through">{price} NOK</p>
            <p className="text-sm">{discount} NOK</p>
            <p className="text-xs absolute h-10 w-10 flex text-center items-center top-2 left-2 border rounded-full bg-white p-2 text-red-400"><strong>Sale</strong></p> 
           </>
        )
    } else {
        return <p className="text-sm">{price} NOK</p>
    }
}