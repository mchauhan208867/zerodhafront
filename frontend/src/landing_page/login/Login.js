import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3002/login",
        { username, password },
        { withCredentials: true } // Ensure cookies are sent & received
      );

      if (response.data.success) {
        window.location.href = "http://localhost:3001/";  // Redirect to Home/Dashboard
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <form onSubmit={handleLogin} className="container mt-5 p-4 border rounded shadow-sm bg-light" style={{ maxWidth: "400px" }}>
  <h3 className="text-center mb-4">Login</h3>
  
  <div className="mb-3">
    <label className="form-label">Username</label>
    <input 
      type="text" 
      className="form-control" 
      placeholder="Enter username" 
      onChange={(e) => setUsername(e.target.value)} 
    />
  </div>

  <div className="mb-3">
    <label className="form-label">Password</label>
    <input 
      type="password" 
      className="form-control" 
      placeholder="Enter password" 
      onChange={(e) => setPassword(e.target.value)} 
    />
  </div>

  <button type="submit" className="btn btn-primary w-100">Login</button>
</form>

  );
};

export default Login;

