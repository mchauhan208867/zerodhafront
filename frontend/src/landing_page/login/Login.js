import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "https://zerodhafront-1.onrender.com/login",
        { username, password },
        { withCredentials: true }
      );

      if (response.data.success) {
        localStorage.setItem("username", username); // Save username
        window.location.href = "https://zerodhafront-n5vn.vercel.app/"; // Redirect
      } else {
        setError("Invalid credentials. Please try again.");
      }
    } catch (error) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <form
      onSubmit={handleLogin}
      className="container mt-5 p-4 border rounded shadow-sm bg-light"
      style={{ maxWidth: "400px" }}
    >
      <h3 className="text-center mb-4">Login</h3>

      {error && <div className="alert alert-danger">{error}</div>}

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

      <button type="submit" className="btn btn-primary w-100">
        Login
      </button>
    </form>
  );
};

export default Login;
