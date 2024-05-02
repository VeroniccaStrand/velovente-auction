import { useBidContext } from '../Contexts/BidContext';

const AuctionComponent = () => {
  const { placeBid, endAuction } = useBidContext();

  const handleBid = () => {
    const amount = 100;

    placeBid(amount);
  };

  const handleEndAuction = () => {
    endAuction();
  };

  return (
    <div>
      <h1 className='btn text-2xl'>Auction Component</h1>
      <button onClick={handleBid} className='btn font-bold'>
        Place Bid
      </button>
      <button onClick={handleEndAuction}>End Auction</button>
    </div>
  );
};

export default AuctionComponent;
