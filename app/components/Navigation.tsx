'use client'

import { usePathname } from "next/navigation"
import ThemeToggler from "./ThemeToggler"
import Link from "next/link"
import { useState } from 'react'

const navLinks = [
    {href: '/', label: 'Home'},
    {href: '/about-us', label: 'About us'},
    {href: '/contact-us', label: 'Contact us'},
]

export default function Navigation(){
    const pathname = usePathname()
    const [ isOpen, setIsOpen ] = useState(false)

    function openNavbar(){ setIsOpen(true)}
    function closeNavbar(){ setIsOpen(false) }


    return(
        <nav className="w-full p-5 md:p-0 flex flex-row justify-between items-center">
            <button 
                className="
                    p-1 border rounded-full fixed top-4 left-2 md:hidden
                    bg-green-500 text-white dark:bg-gray-800 z-10 
                    cursor-pointer
                "
                onClick={openNavbar}
            >
                <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    strokeWidth="1.5" 
                    stroke="currentColor" 
                    className="size-7"
                >
                    <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" 
                    />
                </svg>
            </button>

            {isOpen && (
                <div className="md:hidden relative flex flex-row w-full">
                    <div className="
                        fixed z-50 flex flex-col bg-white dark:bg-gray-800
                        border-r top-0 bottom-0 left-0 gap-15 
                        w-2/5 sm:w-1/5 md:hidden items-center py-15
                    ">
                        <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            fill="none" 
                            viewBox="0 0 24 24" 
                            strokeWidth="1.5" 
                            stroke="currentColor" 
                            className="size-8 absolute flex left-1 top-1"
                            onClick={closeNavbar}
                        >
                            <path 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                d="M6 18 18 6M6 6l12 12" 
                            />
                        </svg>

                        
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


                        <div className="flex flex-col justify-evenly gap-15">
                            <ThemeToggler /> 

                            <Link href={'/cart'}>
                                <svg 
                                   xmlns="http://www.w3.org/2000/svg" 
                                   fill="none" 
                                   viewBox="0 0 24 24" 
                                   strokeWidth="1.5" 
                                   stroke="currentColor" 
                                   className="size-8 cursor-pointer"
                                   onClick={() =>setIsOpen(false)}
                                >   
                                   <path 
                                       strokeLinecap="round" 
                                       strokeLinejoin="round" 
                                       d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" 
                                   />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    <div 
                        className="fixed z-40 top-0 w-full bg-black opacity-70 h-full md:hidden"
                        onClick={closeNavbar}
                    ></div>
                </div>     
            )}

            <div className="
                hidden md:flex flex-row w-full p-2 justify-between 
                border-b text-sm md:text-base lg:text-lg h-fit 
                items-center shadow-sm dark:shadow-lg shadow-black dark:shadow-purple-400/50
            ">
                <div className="flex flex-row w-1/2 justify-evenly lg:text-lg">
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
                                className="dark:hover:text-purple-500"
                            >
                                {link.label}
                            </a>
                        )
                    }})}
                </div>
                
                
                <div className="flex flex-row justify-evenly w-40">
                    <ThemeToggler />

                    <Link href={'/cart'}>
                        <svg 
                           xmlns="http://www.w3.org/2000/svg" 
                           fill="none" 
                           viewBox="0 0 24 24" 
                           strokeWidth="1.5" 
                           stroke="currentColor" 
                           className="size-8 cursor-pointer dark:hover:text-purple-500"
                        >   
                           <path 
                               strokeLinecap="round" 
                               strokeLinejoin="round" 
                               d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" 
                           />
                        </svg>
                    </Link>
                </div>
            </div>
        </nav>
    )
}