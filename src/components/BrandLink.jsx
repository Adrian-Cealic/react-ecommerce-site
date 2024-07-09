import { Link } from 'react-router-dom'

const BrandLink = ({ classes }) => {
    return (
        <div>
            <Link to="/" className={`text-sm md:text-xl xl:text-2xl font-krona ${classes}`}>PerfumeNest</Link>
        </div>
    )
}

export default BrandLink
