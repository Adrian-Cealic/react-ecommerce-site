import { Link } from 'react-router-dom'
import BrandLink from './BrandLink'

const Footer = () => {
    const links = [
        'about',
        'skincare',
        'makeup',
        'supplements',
        'contact',
        // add more links here if needed
    ]

    return (
        <footer className='container bg-primary text-light px-8 py-4 h-auto sm:h-32 mx-auto'>
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0 sm:space-x-4">
                <BrandLink classes="text-accent" />
                <div className="flex flex-wrap justify-center gap-4 text-sm">
                    {links.map((link, idx) => (
                        <Link key={`${link}-${idx}`} to={`/${link}`} className='capitalize'>
                            {link}
                        </Link>
                    ))}
                </div>
            </div>
            <p className='text-dark-grey text-sm mt-4 sm:mt-0'>
                React JS + tailwindcss final IT STEP academy project
            </p>
        </footer>
    )
}

export default Footer
