import React from 'react'
import ButtonLink from './ButtonLink'
import secondaryBannerIMG from '../assets/secondarybannerimg.jpg'

const SecondaryBanner = () => {
    return (
        <div className='container flex flex-row-reverse justify-between items-center mx-auto p-8 bg-pink'>
            <div className="font-krona mb-4 flex flex-col gap-8 px-8">
                <h1 className='text-lg md:text-3xl'>
                    The react project with API using ReactJS, Axios and Tailwind Css
                </h1>
                <ButtonLink path={"/about"} text={"See More"} />
            </div>
            <div className="">
                <img src={secondaryBannerIMG} alt="photo of a parfume" className='w-2/3' />
            </div>
        </div>
    )
}

export default SecondaryBanner
