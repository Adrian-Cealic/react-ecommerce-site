// components
import ButtonLink from './ButtonLink'
// img
import secondaryBannerIMG from '../assets/secondarybannerimg.jpg'

const SecondaryBanner = () => {
    return (
        <div className="bg-green text-white">
            <div className='container mx-auto flex flex-col lg:flex-row-reverse justify-between items-center px-8 py-8'>
                <div className="font-krona mb-4 flex flex-col gap-8">
                    <h1 className='text-lg md:text-3xl'>
                        The react project with API using ReactJS, Axios and Tailwind Css
                    </h1>
                    <ButtonLink path={"/about"} text={"See More"} />
                </div>
                <div className="">
                    <img src={secondaryBannerIMG} alt="photo of a parfume" className='w-full lg:w-2/3' />
                </div>
            </div>
        </div>
    )
}

export default SecondaryBanner
