import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import { useContext } from 'react';
const Product = ({ product }) => {
  const { loggedIn } = useContext(UserContext);
  const formatDate = (dateString) => {
    const options = {
      month: 'short',
      day: '2-digit',
      hour: '2-digit',
      minute: '2-digit',
    };
    return new Date(dateString).toLocaleString('sv-SV', options);
  };

  return (
    <div className='bg-orange-950 rounded-lg overflow-hidden shadow-lg text-stone-200'>
      <img
        src={product.image}
        alt={product.title}
        className='w-full h-64 object-cover'
      />
      <div className='px-6 py-4'>
        <div className='mb-4'>
          <h2 className='text-2xl font-bold text-stone-200'>{product.brand}</h2>
          <p className='text-xl font-bold text-stone-200'>{product.title}</p>
        </div>
        <div className='flex justify-between text-gray-300'>
          <div>
            <p className='text-lg text-stone-400 uppercase font-bold'>
              Auction ends
            </p>
            <p className='text-lg text-stone-100 font-semibold'>
              {formatDate(product.auctionEndDate)}
            </p>
          </div>
          <div>
            <p className='text-lg uppercase font-bold text-stone-400'>
              Current bid
            </p>
            <p className='text-2xl font-semibold text-black'>
              ${product.currentBid.amount}
            </p>
          </div>
        </div>
      </div>
      <div className='px-6 py-4 flex justify-between items-center bg-zinc-950'>
        {loggedIn ? (
          <>
            <div className='flex gap-10'>
              Do you have anything to sell?{' '}
              <Link to='/sellproduct' className='text-orange-500 underline'>
                Create a product
              </Link>
            </div>
          </>
        ) : (
          <>
            <div className='flex gap-10'>
              Would you like to bid on this item?{' '}
              <Link to='/account/create' className='text-orange-500 underline'>
                Create an account
              </Link>
            </div>
          </>
        )}
        <Link
          to={`/product/${product._id}`}
          className='bg-orange-500 hover:bg-orange-600 text-gray-800 font-bold py-2 px-4 rounded '
        >
          More info
        </Link>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Product;
