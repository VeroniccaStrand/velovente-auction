import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getSellingProducts } from '../../services/GetSellingProducts';
import Timer from '../Timer';
import { UserContext } from '../../Contexts/UserContext';
export const SellingProduct = () => {
  const { userProfile } = useContext(UserContext);
  const [sellingProducts, setSellingProducts] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getSellingProducts();

        if (data) {
          setSellingProducts(data);
        } else {
          setSellingProducts([]);
        }
      } catch (error) {
        console.error('error fetching', error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className='max-w-xl p-2 bg-orange-400'>
        <h2 className='text-3xl font-bold text-zinc-700'>
          Your Active Auctions
        </h2>
        <ul className='text-zinc-900 grid grid-cols-2'>
          {sellingProducts.length > 0 ? (
            sellingProducts.map((product) => (
              <li key={product._id}>
                <div className='divider'></div>
                <Link to={`/product/${product._id}`}>
                  <div>
                    <p>{product.brand}</p>
                    <p>{product.title}</p>
                    <p>{product.startingBid}</p>
                    <p>{product.currentBid.amount}</p>
                    <p>{product.bids.length}</p>
                    <Timer product={product} />
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <div>
              <span className='text-lg'>
                {userProfile.username} You have no active auctions right know
              </span>
            </div>
          )}
        </ul>
        <Link className='text-white font-bold text-lg' to='/sellproduct'>
          Sell product
        </Link>
      </div>
    </>
  );
};

export default SellingProduct;
