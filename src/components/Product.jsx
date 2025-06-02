import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AppContext } from '../App'; 

export default function Product() {
  const { user } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const API = import.meta.env.VITE_API_URL;

  useEffect(() => {
    axios.get(`${API}/products`)
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <h3>Welcome {user.name}!</h3>
      <h4>Product List:</h4>
      <ul>
        {products.map(prod => (
          <li key={prod.id}>
            {prod.name} - ₹{prod.price}
          </li>
        ))}
      </ul>
    </div>
  );
}
