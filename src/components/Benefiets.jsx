import React from 'react'
import BenefietItem from './BenefietItem'
const Benefiets = () => {
    const benefiets = [
        {
            title: "Delivery",
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, explicabo?',

        },
        {
            title: "Products",
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, explicabo?'
        },
        {
            title: "Payments",
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, explicabo?'
        }
    ]
    return (
        <div className='container mx-auto flex mb-10 flex-col lg:flex-row'>
            {
                benefiets.map((item) => (
                    <BenefietItem key={item.title} item={item} />
                ))
            }
        </div>
    )
}

export default Benefiets
