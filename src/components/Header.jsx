import React from 'react'
import { Link } from 'react-router-dom';
export default function Header() {
  return (
    <div style={{backgroundColor:"lightblue"}}>
         <h1 style={{backgroundColor:"pink"}}>My Online Shop</h1>
          <Link to="/">Home</Link>-
          <Link to="/cart">Cart</Link>-
           <Link to="/login">Login</Link>

          <hr /> 
    </div>
  )
}
