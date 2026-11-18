import Image from 'next/image'
import Link from 'next/link'

export default function Footer(){

    return(
        <footer className="flex flex-col border-t px-2 gap-5 items-center py-5 w-full">
            <div className="flex flex-col w-[90%] md:flex-row gap-5 justify-evenly md:justify-between items-center">
                <div className='w-[70%] h-32 flex flex-col gap-2'>
                    <h3 className="text-lg md:text-xl underline">Contact us</h3>
                    <p className='text-sm md:text-base'>Email: Javier@onlineshop.com</p>
                    <p className='text-sm md:text-base'>Phone: +47 12 34 45 67</p>
                    <a href = '../contact-us' className="text-sm md:text-base decoration-none cursor-pointer hover:underline hover:font-bold">Send message</a>
                </div>

                <div className='w-[70%] h-32 flex flex-col gap-2 mt-5 md:mt-0'>
                    <h3 className="text-lg md:text-xl underline">Our locations</h3>
                    <p className='text-sm md:text-base'>Oslo, Norway</p>
                    <p className='text-sm md:text-base'>Mexico City, Mexico</p>
                </div>

                <Link href = '/'>
                    <Image
                        className='h-18 w-18 md:w-32 lg:w-28'
                        src = '/images/logo.png'
                        alt = 'logo'
                        height = {100}
                        width = {200}
                    />
                </Link>
                

            </div>
        </footer>
    )
}