import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";

export default function Login() {
  const { user, setUser } = useContext(AppContext);
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async () => {
    try {
      const res = await axios.post("https://gcet-node-app-lake.vercel.app/users/login", {
        email: user.email,
        pass: user.pass,
      });

      const found = res.data;

      if (found && found.name) {
        setMsg("Welcome " + found.name);
        setUser({ ...user, name: found.name, token: "123" });
        navigate("/");
      } else {
        setMsg("Invalid email or password");
      }
    } catch (err) {
      console.error("Login failed:", err);
      if (err.response?.status === 401) {
        setMsg("Invalid email or password");
      } else {
        setMsg("Something went wrong during login");
      }
    }
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login-wrapper">
      <div className="login-card">
        <h2 className="login-title">🔐 Login</h2>
        {msg && <p className="login-msg">{msg}</p>}
        <input
          type="text"
          placeholder="Email address"
          className="login-input"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="Password"
          className="login-input"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
        />
        <button className="login-btn" onClick={handleSubmit}>Login</button>
        <p className="login-bottom">
          Don't have an account?{" "}
          <span className="link" onClick={goToRegister}>
            Register here
          </span>
        </p>
      </div>
    </div>
  );
}
