import Product from './Product';
import PropTypes from 'prop-types';
const ProductList = ({ products }) => {
  const activeProducts = products.filter((product) => product.isActive);
  return (
    <div className='container p-6'>
      <div className='grid grid-cols-2 gap-4'>
        {activeProducts &&
          activeProducts.map((product) => (
            <Product key={product._id} product={product} />
          ))}
      </div>
    </div>
  );
};

export default ProductList;
ProductList.propTypes = {
  products: PropTypes.array,
};
