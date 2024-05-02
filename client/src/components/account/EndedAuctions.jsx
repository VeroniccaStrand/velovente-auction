import { useContext } from 'react';
import { ProductContext } from '../../Contexts/ProductContext';
import { UserContext } from '../../Contexts/UserContext';
const EndedAuctions = () => {
  const { products } = useContext(ProductContext);
  const { userProfile } = useContext(UserContext);
  const endedProducts = products.filter((product) => !product.isActive);

  const matchedEndedProducts = endedProducts.filter((endedProduct) => {
    console.log('Ended Product:', endedProduct);
    const hasBids = endedProduct.bids.some((bid) => {
      console.log('Bid:', bid);
      console.log(userProfile._id);
      return bid.bidder === userProfile?._id;
    });
    console.log('Has Bids:', hasBids);
    return hasBids;
  });
  console.log(matchedEndedProducts);
  return (
    <div className='overflow-x-auto container mx-auto p-10'>
      <h2 className='text-3xl font-bold text-zinc-900 mb-6'>Ended Auctions</h2>
      <table className='table font-sans'>
        <thead>
          <tr className='text-zinc-900 text-xl'>
            {/* Render column headers based on user's auction outcome */}
            {userProfile && userProfile._id ? (
              <>
                <th>Product</th>
              </>
            ) : (
              <>
                <th>Product</th>
              </>
            )}
            <th>Winning Bid</th>
            <th>Winner</th>
            {/* Render an empty header cell */}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {matchedEndedProducts.map((product) => (
            <tr className='text-zinc-200' key={product._id}>
              <td>
                <div className='flex items-center gap-3'>
                  <div className='avatar'>
                    <div className='mask mask-squircle w-12 h-12'>
                      <img src={product.image} alt='Product Image' />
                    </div>
                  </div>
                  <div>
                    <div className='font-bold'>{product.title}</div>
                  </div>
                </div>
              </td>
              <td>$ {product.currentBid.amount}</td>
              <td>
                {userProfile &&
                userProfile._id === product.currentBid.userId ? (
                  <span className='uppercase text-green-400'>you won</span>
                ) : (
                  <span className='uppercase text-red-400'>You Lost</span>
                )}
              </td>
              {/* Conditionally render button based on user's auction outcome */}
              {userProfile && userProfile._id === product.currentBid.userId ? (
                <td>
                  <button className='btn btn-ghost btn-xs'>
                    Payment information
                  </button>
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EndedAuctions;
