import React from 'react'
import { NavLink } from 'react-router-dom'

const NavLinks = ({ isMobile }) => {
    const links =
        [
            { label: 'Home', path: '/' },
            { label: 'Search', path: '/search' },
            { label: 'About', path: '/about' }
        ]
    return (
        <div className={`${isMobile ? "flex flex-col gap-4 mb-[70%]" : "flex flex-row gap-4"}`}>
            {links.map((link, idx) => (
                <NavLink key={`${link}-${idx}`} to={link.path} className={({ isActive }) => [isActive ? "text-accent" : "text-black"]}>{link.label}</NavLink>
            ))}
        </div>
    )
}

export default NavLinks
