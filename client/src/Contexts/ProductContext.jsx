import { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchProducts();
  }, []);

  const addProduct = async (formData) => {
    try {
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();

      setProducts([...products, data]); // Uppdatera produkter efter att ha lagt till den nya produkten
    } catch (error) {
      console.error('Error adding product', error);
    }
  };
  const updateProduct = (updatedProduct) => {
    const updatedProducts = products.map((product) =>
      product._id === updatedProduct._id ? updatedProduct : product
    );

    setProducts(updatedProducts);
  };
  return (
    <ProductContext.Provider
      value={{ products, setProducts, addProduct, updateProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
};

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProductProvider;
