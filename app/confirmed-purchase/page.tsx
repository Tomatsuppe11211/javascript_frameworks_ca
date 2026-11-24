'use client'

import Link from "next/link"

export default function confirmPurchasePage(){
    return(
        <div className="
            flex flex-col items-center gap-5 w-9/10 border py-5 
            mb-20 md:mb-0 md:w-1/2 lg:w-1/3 xl:w-1/4 rounded-xl
            shadow-lg shadow-black dark:shadow-purple-500/50
            dark:bg-gray-800 border-black
        ">
            <h1 className="text-xl lg:text-2xl w-9/10 text-center">Thank you for the purchase!</h1>

            <p className="lg:text-lg w-9/10">
                Your Order has been recieved and will be
                sent to you shortly.
            </p>

            <Link href='/'>
                <button className="
                    border border-black p-2 cursor-pointer shadow-md
                    shadow-black dark:shadow-purple-500/50 dark:bg-gray-900
                    hover:bg-green-500 hover:text-white dark:hover:bg-purple-500
                    rounded-lg
                ">
                    Back home
                </button>
            </Link>
        </div>
    )
}