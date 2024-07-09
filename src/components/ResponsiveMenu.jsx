import React from 'react'
import NavLinks from './NavLinks'
import BrandLink from './BrandLink'

const ResponsiveMenu = ({ showMenu }) => {

    return (
        <div className={`${showMenu ? "left-0" : "-left-[100%]"} container fixed bottom-0 top-0 z-20 flex h-full w-[40%] flex-col
         bg-[#975224] px-8 pt-24 text-white font-krona transition-all duration-200 ease-in justify-between`}>
            <BrandLink classes={"text-black "} />
            <div className="flex flex-col gap-10">
                <NavLinks isMobile={true} />
            </div>
        </div>
    )
}

export default ResponsiveMenu
