import { useContext } from 'react';
import ProductList from '../components/products/ProductList';
import { ProductContext } from '../Contexts/ProductContext';

const AuctionHubPage = () => {
  const { products } = useContext(ProductContext);

  return (
    <>
      <ProductList products={products} />
    </>
  );
};

export default AuctionHubPage;
