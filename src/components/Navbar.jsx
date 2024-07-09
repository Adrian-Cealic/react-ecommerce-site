import BrandLink from './BrandLink'
import { NavLink } from 'react-router-dom'



const navbar = () => {

  const links =
    [
      { label: 'Home', path: '/' },
      { label: 'Search', path: '/search' },
      { label: 'About', path: '/about' }
    ]

  return (
    <nav className='flex justify-between py-3 font-krona'>
      <BrandLink />

      <div className="flex gap-8 text-xs md:text-sm items-end lowercase">

        {links.map((link, idx) => (
          <NavLink key={`${link}-${idx}`} to={link.path} className={({ isActive }) => [isActive ? "text-accent" : "text-black"]}>{link.label}</NavLink>
        ))}

        <div className="flex gap-8">
          {/* icons */}

          {/* liked */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6   ">
            <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
          </svg>
          {/* cart */}
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
          </svg>

        </div>

      </div>
    </nav >
  )
}

export default navbar
