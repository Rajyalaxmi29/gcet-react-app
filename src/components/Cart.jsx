// Cart.jsx

import React, { useContext } from "react";
import { AppContext } from "../App";
import "./Cart.css";

export default function Cart() {
  const { cart } = useContext(AppContext);

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 My Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <ul className="cart-list">
          {cart.map((item, index) => (
            <li className="cart-item" key={index}>
              <h4>{item.name}</h4>
              <p>Price: ₹{item.price}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
