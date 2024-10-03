import React, { useEffect, useState } from 'react';
import PraticeaxiosInstance from './praticeaxiosinterceptors';// Import the Axios instance


function Praticeaxios() {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState('');
  
    useEffect(() => {
      // Fetch products from the Fake Store API
      const fetchProducts = async () => {
        try {
          const response = await PraticeaxiosInstance.get('/products'); // Fetch products from /products endpoint
          setProducts(response.data);
        } catch (err) {
          console.error('Error fetching products:', err);
          setError('Failed to fetch products');
        }
      };
      fetchProducts();
    }, []);
  
    return (
      <div>
        <h1>Fake Store Products</h1>
        {error ? (
          <p>{error}</p>
        ) : (
          <ul>
            {products.map((product) => (
              <li key={product.id}>
                <h3>{product.title}</h3>
                <p>{product.description}</p>
                <strong>${product.price}</strong>
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

export default Praticeaxios;
