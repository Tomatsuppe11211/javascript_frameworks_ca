'use client'

export default function ContactUs(){
    return(
        <>
            <form className="flex flex-col border w-[90%] md:w-[50%] gap-5 py-5 items-center">
                <h1 className="text-2xl lg:text-3xl text-center">Contact us</h1>

                <div className="flex flex-row w-full p-2 gap-2">
                    <label htmlFor="title" className="md:text-lg lg:text-xl">Title:</label>
                    <input
                        type='text'
                        placeholder="Enter title/subject..."
                        className="md:text-lg lg:text-xl border-b w-full"
                    />
                </div>


                <div className="flex flex-col w-full p-2 gap-2">
                    <label htmlFor="message" className="md:text-lg lg:text-xl">Message: (max 200 characters)</label>
                    <textarea
                        placeholder="Enter your message..."
                        maxLength={500}
                        className="min-h-40 p-2 border rounded-lg md:text-lg lg:text-xl"
                    ></textarea>
                </div>

                <button className="text-lg lg:text-xl border bg-green-400 rounded-lg w-fit px-2 cursor-pointer">
                    Send message
                </button>
            </form>
        </>
    )
}