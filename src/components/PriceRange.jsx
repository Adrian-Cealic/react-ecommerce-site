import React from 'react'

const PriceRange = () => {
    return (
        <div className='bg-gray-200 py-4 px-6'>
            <p className='font-krona text-sm mb-2'>Select price</p>
            <div className="flex justify-between">
                <div className="text-center">
                    <input type="text" className='w-20 text-center p-2 focus:ring-accent focus:ring-inset caret-accent outline-none focus:ring-2 mb-2' placeholder='min' name='min' />
                    <label className='text-sm' htmlFor="min">min</label>
                </div>
                <hr className='border border-accent w-full mt-4' />
                <div className="text-center">
                    <input type="text" className='w-20 text-center p-2 focus:ring-accent focus:ring-inset caret-accent outline-none focus:ring-2 mb-2' placeholder='max' name='max' />
                    <label className='text-sm' htmlFor="max">max</label>
                </div>
            </div>
        </div>
    )
}

export default PriceRange
