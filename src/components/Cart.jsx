import React, { useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Cart.css";

export default function Cart() {
  const { cart, setCart, user } = useContext(AppContext);
  const navigate = useNavigate();

  const totalOrderValue = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const placeOrder = async () => {
    if (!user || !user.email) {
      alert("Please login to place your order");
      navigate("/login");
      return;
    }

    try {
      // Updated POST request with items field
      await axios.post("https://gcet-node-app-lake.vercel.app/orders/new", {
        email: user.email,
        orderValue: totalOrderValue,
        items: cart, // include cart items
      });

      setCart([]); // Clear cart after placing order
      navigate("/orders"); // Redirect to orders page
    } catch (err) {
      console.error("Error placing order", err);
      alert("Failed to place order");
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart-title">🛒 My Cart</h2>
      {cart.length === 0 ? (
        <p className="cart-empty">Your cart is empty</p>
      ) : (
        <>
          <ul className="cart-list">
            {cart.map((item, index) => (
              <li className="cart-item" key={index}>
                <h4>{item.name}</h4>
                <p>Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>Subtotal: ₹{item.price * item.quantity}</p>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <h3>Total: ₹{totalOrderValue.toFixed(2)}</h3>
            <button className="btn-order" onClick={placeOrder}>
              ✅ Place Order
            </button>
          </div>
        </>
      )}
    </div>
  );
}
