import { createContext, useContext } from 'react';

import { ServiceBid } from '../services/BidService';
import PropTypes from 'prop-types';

const BidContext = createContext();

export const useBidContext = () => {
  return useContext(BidContext);
};

export const BidProvider = ({ children }) => {
  const handleBid = async (bidObject) => {
    try {
      const success = await ServiceBid(bidObject);

      if (success) {
        console.log(success);
      } else {
        console.log(success);
      }

      return success;
    } catch (error) {
      console.error('Error placing bid:', error);
      return false;
    }
  };

  const value = {
    handleBid,
  };

  return <BidContext.Provider value={value}>{children}</BidContext.Provider>;
};
BidProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
