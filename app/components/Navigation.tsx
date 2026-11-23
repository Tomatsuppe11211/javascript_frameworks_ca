'use client'

import { usePathname } from "next/navigation"
import ThemeToggler from "./ThemeToggler"
import Link from "next/link"

const navLinks = [
    {href: '/', label: 'Home'},
    {href: '/about-us', label: 'About us'},
    {href: '/contact-us', label: 'Contact us'},
]

export default function Navigation(){
    const pathname = usePathname()

    return(
        <nav className=" w-screen p-5 flex flex-row justify-between items-center">
            <div className="flex w-1/5 justify-evenly">
                {navLinks.map((link) => {{
                    const isActive = pathname === link.href

                    return(
                        <a
                            key = {link.href}
                            href = {link.href}
                            style = {{
                                marginRight: '1rem',
                                fontWeight: isActive? 'bold' : 'normal',
                                textDecoration: isActive? 'underline' : 'none'
                            }}
                        >
                            {link.label}
                        </a>
                    )
                }})}
            </div>
            

            <div className="flex flex-row justify-evenly w-1/5">
                <ThemeToggler /> 

                <Link href={'/cart'}>
                    <svg 
                       xmlns="http://www.w3.org/2000/svg" 
                       fill="none" 
                       viewBox="0 0 24 24" 
                       strokeWidth="1.5" 
                       stroke="currentColor" 
                       className="size-6 cursor-pointer"
                    >   
                       <path 
                           strokeLinecap="round" 
                           strokeLinejoin="round" 
                           d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" 
                       />
                    </svg>
                </Link>
            </div>
        </nav>
    )
}