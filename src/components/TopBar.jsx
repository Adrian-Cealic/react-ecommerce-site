import React from 'react'
import DropDown from './DropDown'
const TopBar = ({ setFilter }) => {


    const handleOnChange = e => {
        const { name, value } = e.target;
        setFilter(name, value);
    };
    
    return (
        <div className='flex space-x-4'>
            <DropDown onChange={handleOnChange} />
        </div>
    )
}

export default TopBar
