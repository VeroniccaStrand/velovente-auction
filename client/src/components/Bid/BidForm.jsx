import { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { ProductContext } from '../../Contexts/ProductContext';
import { useBidContext } from '../../Contexts/BidContext';
import { UserContext } from '../../Contexts/UserContext';
import { Link } from 'react-router-dom';
const BidForm = ({ id }) => {
  const { handleBid } = useBidContext();
  const { products, updateProduct } = useContext(ProductContext);
  const { loggedIn } = useContext(UserContext);
  const product = products.find((product) => product._id === id);
  const [bidObject, setBidObject] = useState({
    productId: product._id,
    amount: '',
  });
  const [error, setError] = useState('');
  const [bidSuccess, setBidSuccess] = useState(false);

  const handleAmountChange = (event) => {
    const { value } = event.target;
    setBidObject({ ...bidObject, amount: value });
    setError('');
    setBidSuccess(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!bidObject.amount) {
      setError('Please enter a bid amount');
      return;
    }

    const bidAmount = parseFloat(bidObject.amount);

    if (
      bidAmount <= product.currentBid.amount ||
      bidAmount <= product.startingBid
    ) {
      setError('Bid amount must be higher than the current bid');
      setBidObject({
        productId: product._id,
        amount: '',
      });
      return;
    }

    const success = await handleBid(bidObject);

    if (success) {
      console.log('Bid placed successfully');
      setBidSuccess(true);
      setBidObject({
        productId: product._id,
        amount: '',
      });
      const updatedProduct = {
        ...product,
        currentBid: {
          ...product.currentBid,
          amount: bidAmount,
        },
      };

      updateProduct(updatedProduct);
    } else {
      console.log('Failed to place bid');
      // Implementera logik för felhantering (t.ex. visa felmeddelande)
    }
  };

  return (
    <div className='mt-2'>
      {loggedIn ? (
        <>
          <p className='uppercase text-xl font-black text-orange-400 ml-2 mb-2'>
            Bid
          </p>
          <form onSubmit={handleSubmit}>
            <input
              name='amount'
              className='input input-bordered w-full max-w-xs'
              type='number'
              value={bidObject.amount}
              onChange={handleAmountChange}
              placeholder='Enter bid amount'
            />

            <button
              className='btn bg-orange-950 text-white uppercase font-bold ml-2'
              type='submit'
            >
              Place bid
            </button>
            {error && <p className='text-red-500'>{error}</p>}
            {bidSuccess && (
              <p className='text-green-400 ml-2 mt-2'>
                Your bid has been placed successfully!
              </p>
            )}
          </form>
        </>
      ) : (
        <>
          <div className='flex gap-10 '>
            <p className='text-orange-400 text-xl'>
              Would you like to bid on this item?
            </p>
            <div className='flex'>
              <Link
                to='/account/login'
                className='text-2xl uppercase font-bold text-gray-950 hover:drop-shadow'
              >
                Log in
              </Link>
              <div className='divider divider-horizontal '></div>

              <Link
                to='/account/create'
                className='text-2xl uppercase font-bold text-gray-950 hover:drop-shadow'
              >
                Create Account
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

BidForm.propTypes = {
  id: PropTypes.string.isRequired,
};

export default BidForm;
