import React, { useState, useContext } from "react";
import { AppContext } from "../App";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Register.css";

export default function Register() {
  const { users, setUsers } = useContext(AppContext);
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  const API = import.meta.env.VITE_API_URL || "https://gcet-node-app-lake.vercel.app";

  const handleSubmit = async () => {
    try {
      const res = await axios.post(`${API}/users/register`, user);

      setUsers([...users, user]);
      alert("Registration successful!");
      navigate("/login");
    } catch (error) {
      console.error("Registration error:", error);
      alert("Registration failed. Please try again.");
    }
  };

  return (
    <div className="register-wrapper">
      <div className="register-card">
        <h2 className="register-title">📝 Register</h2>

        <input
          type="text"
          placeholder="Name"
          className="register-input"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email address"
          className="register-input"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <input
          type="password"
          placeholder="New Password"
          className="register-input"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
        />
        <button className="register-btn" onClick={handleSubmit}>
          Submit
        </button>

        {users?.length > 0 && (
          <ul className="registered-users">
            {users.map((value, index) => (
              <li key={index}>
                {value.name} - {value.email} - {value.pass}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
