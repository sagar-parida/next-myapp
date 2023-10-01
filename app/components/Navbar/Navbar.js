import Link from 'next/link'
import React from 'react'
import './Navbar.css'

export default function Navbar() {
    return (
        <div className='navbar'>
            <Link href='/'>Home</Link>
            <Link href='/about'>About</Link>
            <Link href='/dashboard'>Dashboard</Link>
            <Link href='/contact'>Contact Us</Link>
        </div>
    )
}
