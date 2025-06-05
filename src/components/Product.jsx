import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";
import axios from "axios";
export default function Product() {
  const { user } = useContext(AppContext);
  const [products, setProducts] = useState([]);
    const API = import.meta.env.VITE_API_URL;
  const fetchProducts = async () => {
    const res = await axios.get(`${API}/products/all`);
    setProducts(res.data.data);
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <h3>Welcome {user.name}! </h3>
      Product List
      {products && products.map((value) => <li>{value.name}</li>)}
    </div>
  );
}