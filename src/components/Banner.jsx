import React from 'react'
import BannerImg from '../assets/bannerimg.jpg'
import ButtonLink from './ButtonLink'

const Banner = () => {
    return (
        <div className='container flex flex-col-reverse lg:flex-row items-center mx-auto mt-20'>
            <div className="font-krona mb-4 flex flex-col gap-8 px-8">
                <h1 className='text-lg md:text-3xl font-bold'>
                    The Fragrance e-commerce project
                </h1>
                <p className='text-xs md:text-sm'>The react project with API using ReactJS, Axios and Tailwind Css</p>
                <p className='text-xs md:text-sm'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga molestiae rerum provident
                    tempore repellat explicabo doloremque. Doloremque optio ipsa expedita inventore laudantium unde amet,
                    praesentium maiores fugiat esse, eius eveniet.
                </p>
                <ButtonLink path={"/about"} text={"See More"} isMain={true}/>
            </div>
            <div className="p-4 md:mb-8">
                <img src={BannerImg} alt="photo of a parfume" className='' />
            </div>
        </div>

    )
}

export default Banner
