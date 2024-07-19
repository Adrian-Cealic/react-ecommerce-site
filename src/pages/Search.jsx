import React from 'react'
import Sidebar from '../components/Sidebar'
import TopBar from '../components/TopBar'
import useFilter from '../hooks/useFilter'
import Product from '../components/Product'
import Loader from '../components/Loader'
const Search = () => {
  const { products, setFilter, isLoading } = useFilter();

  return (

    <div className='search'>
      <div className="sidebar">
        <Sidebar setFilter={setFilter} products={products} />
      </div>
      <TopBar setFilter={setFilter} />
      <div className="grid grid-cols-4 ml-2">
        {isLoading ? <Loader classes={"absolute h-[0vh] ml-[600px] top-96"} /> :
          products.map(product => (
            <Product
              key={product.productId}
              brandName={product.brandName}
              displayName={product.displayName}
              heroImage={product.heroImage}
              altImg={product.altImage}
              price={product.price}
              productId={product.productId}
              quickLookDescription={product.quickLookDescription}
            />
          ))}
      </div>
    </div>
  )
}

export default Search
