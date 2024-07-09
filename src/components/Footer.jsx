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
        <footer className='bg-primary text-light px-8 py-4 h-32'>
            <div className="flex justify-between items-center">
                <BrandLink classes="text-accent" />
                <div className="flex gap-4 text-sm">
                    {links.map((link,idx) => (
                        <Link key={`${link}-${idx}`} to='/{link}' className=''>{link}</Link>
                    ))}
                </div>
            </div>
            <p className='text-dark-grey text-sm'>
                React JS + tailwindcss final IT STEP academy project
            </p>
        </footer>
    )
}

export default Footer
