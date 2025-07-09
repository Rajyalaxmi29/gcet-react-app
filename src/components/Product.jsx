import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import "./Product.css";

export default function Product() {
  const { user, addToCart } = useContext(AppContext);
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const fetchProducts = async () => {
    try {
      const res = await axios.get("https://gcet-node-app-lake.vercel.app/products/all");
      setProducts(res.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="product-container">
      <h2 className="welcome">Welcome {user?.name || "Guest"}!</h2>
      
      <div className="product-grid">
        {products.map((item) => (
          <div className="product-card" key={item._id}>
            <img
              src={item.imgUrl || "https://via.placeholder.com/150"}
              alt={item.name}
              className="product-image"
            />
            <h3 className="product-title">{item.name}</h3>
            <p className="product-desc">{item.description}</p>
            <h4 className="product-price">₹{item.price}</h4>
            <button className="add-cart-btn" onClick={() => addToCart(item)}>
              ➕ Add to Cart
            </button>
          </div>
        ))}
      </div>

      <button className="go-cart-btn" onClick={() => navigate("/cart")}>
        🛒 Go to Cart
      </button>
    </div>
  );
}
