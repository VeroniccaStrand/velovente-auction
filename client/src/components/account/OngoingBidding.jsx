import { useContext, useEffect, useState } from 'react';
import { GetOngoingService } from '../../services/GetOngoingService';
import { Link } from 'react-router-dom';
import { UserContext } from '../../Contexts/UserContext';
import Timer from '../Timer';
const OngoingBidding = () => {
  const { userProfile } = useContext(UserContext);
  const [ongoingBids, setOngoingBids] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await GetOngoingService();
        // Logga data för att se vad som returneras

        if (data) {
          setOngoingBids(data.filter((product) => product.isActive));
        } else {
          // Om det inte finns någon data, sätt ongoingBids till en tom array
          setOngoingBids([]);
        }
      } catch (error) {
        console.error('Error fetching ongoing bids:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <div className='max-w-xl p-2'>
        <h2 className='text-3xl font-bold text-zinc-900'>
          Products you are bidding on
        </h2>
        <ul className='grid gap-2'>
          {ongoingBids.length > 0 ? (
            ongoingBids.map((product) => (
              <li key={product._id}>
                <div className='divider'></div>
                <Link to={`/product/${product._id}`}>
                  <div className='flex rounded p-2 gap-2 font-sans'>
                    <img
                      className='w-20 h-20 rounded'
                      src={product.image}
                      alt=''
                    />
                    <div className='text-gray-200 text-lg'>
                      <p className='font-bold'>{product.title}</p>
                      <div className='flex items-center'>
                        <p className='text-lg font-bold text-zinc-900'>
                          {product.currentBid.amount} $
                        </p>
                        {product.currentBid.userId === userProfile._id ? (
                          <p className='ml-2 text-sm font-bold text-green-500'>
                            You have the highest bid
                          </p>
                        ) : (
                          <p className='ml-2 text-sm font-bold text-red-500'>
                            You do not have the highest bid
                          </p>
                        )}
                      </div>
                      <div className='text-sm text-gray-200 font-semibold'>
                        <Timer product={product} />
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            ))
          ) : (
            <>
              <p className='text-2xl text-gray-200'>
                You are not currently bidding on any products.
              </p>
              <Link
                to='/auctionhub'
                className='text-gray-900 font-bold underline text-lg'
              >
                Explore the auction hub
              </Link>
            </>
          )}
        </ul>
      </div>
    </>
  );
};

export default OngoingBidding;
