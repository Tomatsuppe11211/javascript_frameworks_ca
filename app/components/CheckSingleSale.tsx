
export default function CheckSingleSale({price, discount}: {price: number, discount: number}){
    const savedPercent = 100 - Math.floor((discount / price) * 100)

    const savedMoney = price - discount
    
    if(discount < price){
        return (
           <>
            <p className=" text-gray-400 line-through">{price} NOK</p>
            <p className="text-lg">{discount} NOK</p>
            <p className="text-lg absolute h-20 w-20 flex text-center items-center top-60 left-2 border rounded-full bg-white p-2 text-red-400"><strong>{savedPercent}% OFF!</strong></p> 
            <br/>
            <p className=" text-red-400">Save {savedMoney} NOK</p>
           </>
        )
    } else {
        return <p className="text-lg">{price} NOK</p>
    }
}