import EndedAuctions from '../components/account/EndedAuctions';
import OngoingBidding from '../components/account/OngoingBidding';
import SellingProduct from '../components/account/SellingProduct';

const ProfilePage = () => {
  return (
    <>
      <div className='container grid grid-cols-2'>
        <OngoingBidding />
        <SellingProduct />
        <div className='grid col-span-2'>
          <EndedAuctions />
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
