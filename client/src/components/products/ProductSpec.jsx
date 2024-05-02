import PropTypes from 'prop-types';
import { StarIcon } from '@heroicons/react/24/outline';
const ProductSpec = ({ spec }) => {
  return (
    <div className=' mt-4 mb-4 p-4 '>
      <h3 className='text-2xl font-black mb-4  '>Specifications</h3>
      <ul className='grid gap-2 text-sm font-sans '>
        <li className='flex gap-2 items-center'>
          <StarIcon className='h-5 w-5 text-orange-400 items-baseline' />
          <strong className=''>Frame:</strong> {spec.frame}
        </li>
        <li className='flex gap-2 items-center'>
          <StarIcon className='h-5 w-5 text-orange-400 items-baseline' />
          <strong>Fork:</strong> {spec.fork}
        </li>
        <li className='flex gap-2 items-center'>
          <StarIcon className='h-5 w-5 text-orange-400 items-baseline' />
          <strong>Gears:</strong> {spec.gears}
        </li>
        <li className='flex gap-2 items-center'>
          <StarIcon className='h-5 w-5 text-orange-400 items-baseline' />
          <strong>Brakes:</strong> {spec.brakes}
        </li>
        <li className='flex gap-2 items-center'>
          <StarIcon className='h-5 w-5 text-orange-400 items-baseline' />
          <strong>Tires:</strong> {spec.tires}
        </li>
        <li className='flex gap-2 items-center'>
          <StarIcon className='h-5 w-5 text-orange-400 items-baseline' />
          <strong>Saddle:</strong> {spec.saddle}
        </li>
        <li className='flex gap-2 items-center'>
          <StarIcon className='h-5 w-5 text-orange-400 items-baseline' />
          <strong>Handlebar:</strong> {spec.handlebar}
        </li>
      </ul>
    </div>
  );
};

ProductSpec.propTypes = {
  spec: PropTypes.shape({
    frame: PropTypes.string.isRequired,
    fork: PropTypes.string.isRequired,
    gears: PropTypes.string.isRequired,
    brakes: PropTypes.string.isRequired,
    tires: PropTypes.string.isRequired,
    saddle: PropTypes.string.isRequired,
    handlebar: PropTypes.string.isRequired,
  }).isRequired,
};
export default ProductSpec;
