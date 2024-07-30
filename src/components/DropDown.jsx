const DropDown = ({ onChange, uniqueTypes }) => {

    return (
        <div className="flex flex-col my-2">
            <label className='font-bold font-krona text-sm mb-2' htmlFor="brand">Brand</label>
            <select
                className='font-krona text-sm focus:ring-2 focus:ring-accent outline-none rounded-md border-b-2 border-accent'
                name="brandName"
                id="brandName"
                onChange={onChange}
            >
                {uniqueTypes.map((type, index) => (
                    <option key={index} value={type}>{type}</option>
                ))}
            </select>
        </div>
    );
};

export default DropDown;
