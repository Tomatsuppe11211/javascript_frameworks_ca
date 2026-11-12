import Image from 'next/image'

export default function Footer(){

    return(
        <footer className="flex flex-col border-t p-2 gap-5 items-center">
            <h2 className="text-center text-lg">Señor Javier's Online shop</h2>

            <div className="flex flex-col w-screen md:flex-row gap-5 justify-evenly">
                <div>
                    <h3 className="text-lg">Contact us</h3>
                    <p className='text-sm'>Email: Javier@onlineshop.com</p>
                    <p className='text-sm'>Phone: +47 12 34 45 67</p>
                    <a href = '#' className=" text-sm decoration-none cursor-pointer hover:underline hover:font-bold">Send message</a>
                </div>

                <div>
                    <h3 className="text-lg">Our locations</h3>
                    <p className='text-sm'>Oslo, Norway</p>
                    <p className='text-sm'>Mexico City, Mexico</p>
                </div>

                <Image
                    className='h-18 w-18'
                    src = '/images/logo.png'
                    alt = 'logo'
                    height = {100}
                    width = {200}
                />

            </div>
        </footer>
    )
}