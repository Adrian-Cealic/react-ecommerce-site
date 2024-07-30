// componetns
import ButtonLink from './ButtonLink';
import SectionTitle from './SectionTitle';
import Product from './Product';
import Loader from './Loader';
// hooks
import useGetProducts from '../hooks/useGetProducts';

// react-carousel
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const TopProducts = () => {
    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    const { products } = useGetProducts();

    return (
        <div className='container mx-auto px-8 '>
            <div className="flex items-center justify-between">
                <SectionTitle text={"Top Products"} />
                <ButtonLink path={"/about"} text={"See more"} isMain={true} />
            </div>
            {products.length > 0 ? (
                <Carousel responsive={responsive}>
                    {products.map(product => (
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
                </Carousel>
            ) : (
                <Loader size={15} />
            )}
        </div>
    );
};

export default TopProducts;
