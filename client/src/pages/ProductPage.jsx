import { useParams } from 'react-router-dom';
import { ProductContext } from '../Contexts/ProductContext';
import { useContext, useEffect, useState } from 'react';
import ProductSpec from '../components/products/ProductSpec';
import { UserContext } from '../Contexts/UserContext';
import Timer from '../components/Timer';
import BidForm from '../components/Bid/BidForm';

const ProductPage = () => {
  const { userProfile } = useContext(UserContext);
  const { products } = useContext(ProductContext);
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // Check if products are loaded and id is available
    if (products && id) {
      const foundProduct = products.find((product) => product._id === id);

      if (foundProduct) {
        setProduct(foundProduct);
        setIsLoading(false);
      }
    }
  }, [products, id]);

  if (isLoading) {
    return <span className='loading loading-dots loading-lg'></span>;
  }

  const { description } = product;
  const { overview, spec } = description;
  return (
    <>
      <div className='grid grid-cols-2'>
        <div className=''>
          <img
            src={product.image}
            alt='bicycle'
            className='object-cover w-full h-full'
          />
        </div>
        <div className='p-2 ml-4 flex-col justify-center'>
          <h2 className='text-3xl font-black '>{product.brand}</h2>
          <p className='text-2xl font-thin '>{product.title}</p>
          <div className='container'>
            <div className='mt-4 text-white'>
              <div className='flex-col text-2xl font-bold'>
                <Timer product={product} />
              </div>
              <div>
                {product.currentBid.amount > 0 ? (
                  <div className='flex items-center ml-2'>
                    <p className='uppercase font-bold mr-2'>Current Bid</p>
                    <span className='text-5xl '>
                      {product.currentBid.amount} $
                    </span>
                  </div>
                ) : (
                  <div className='flex items-center ml-2'>
                    <p className='uppercase font-bold mr-2'>Starting Bid</p>
                    <span className='text-5xl  '>{product.startingBid} $</span>
                  </div>
                )}
                {userProfile._id === product.seller ? (
                  <div className='my-4'>
                    <span className='text-yellow-400 text-lg'>
                      Your auction has <span>{product.bids.length}</span> bids
                    </span>
                  </div>
                ) : (
                  <BidForm id={product._id} />
                )}
              </div>
            </div>
          </div>
          <div className=' '>
            <ProductSpec spec={spec} />
          </div>
          <div className='mt-10  max-w-2xl'>
            <p className='text-2xl font-light text-white leading-10'>
              {overview}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
