// react-router-doom
import { Link } from 'react-router-dom'

const ButtonLink = ({ path, text, isMain }) => {
    return (
        <>
            <Link to={path}>
                <button className={`${isMain ? 'bg-accent' : 'bg-primary text-white'} text-primary md:px-8 px-4 py-2 md:py-4 text-xs md:text-sm rounded-full font-krona`}>
                    {text}
                </button>
            </Link>
        </>
    )
}

export default ButtonLink
