import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
function Timer({ product }) {
  const [timeLeft, setTimeLeft] = useState(
    calculateTimeLeft(product.auctionEndDate)
  );

  function calculateTimeLeft(endTime) {
    const difference = new Date(endTime) - new Date();
    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((difference / (1000 * 60)) % 60);
    const seconds = Math.floor((difference / 1000) % 60);

    return { days, hours, minutes, seconds };
  }

  useEffect(() => {
    const timerInterval = setInterval(() => {
      const newTimeLeft = calculateTimeLeft(product.auctionEndDate);
      setTimeLeft(newTimeLeft);
    }, 1000);

    return () => clearInterval(timerInterval);
  }, [product.auctionEndDate]);

  return (
    <div>
      <div>
        {timeLeft.days > 0 && `${timeLeft.days} days`}{' '}
        {timeLeft.hours > 0 && `${timeLeft.hours} hours`}{' '}
        {timeLeft.minutes > 0 && `${timeLeft.minutes}minute`} {timeLeft.seconds}{' '}
        seconds
      </div>
    </div>
  );
}
Timer.propTypes = {
  product: PropTypes.shape({
    auctionEndDate: PropTypes.oneOfType([
      PropTypes.instanceOf(Date),
      PropTypes.string,
    ]).isRequired,
  }).isRequired,
};

export default Timer;
