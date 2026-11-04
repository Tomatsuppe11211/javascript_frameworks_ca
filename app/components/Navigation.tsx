'use client'

import { usePathname } from "next/navigation"

const navLinks = [
    {href: '/', label: 'Home'},
    {href: '/about-us', label: 'About us'}
]

export default function Navigation(){
    const pathname = usePathname()

    return(
        <nav className="ml-5">
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
        </nav>
    )
}