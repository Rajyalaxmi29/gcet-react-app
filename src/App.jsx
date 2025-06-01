import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Product from "./components/Product";
import Cart from "./components/Cart";
import Login from "./components/Login";
import App1 from "./components/App1";
import Header from "./components/Header";

import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
function App() {
  return (
    <div>
      <BrowserRouter>
        
      
<Header/>
      
          <Routes>
            <Route index element={<Product />} />
            <Route path="/" element={<Product/>}></Route>
            <Route path="/cart" element={<Cart/>}></Route>
            <Route path="/login" element={<Login/>}></Route>
            <Route path="/app1" element={<App1/>}></Route>
          </Routes>
     
        <footer>
          <hr />
          &copy; 2005. All rights Reserved.
        </footer>
      </BrowserRouter>
    </div>
  );
}
export default App;