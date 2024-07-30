const CartButton = ({ content }) => {
    return (
        <div className="">
            <button className='lowercase inline-block rounded-full font-bold font-krona text-black bg-accent px-8 py-4 text-xs'>
                {content}
            </button>
        </div>
    )
}

export default CartButton
