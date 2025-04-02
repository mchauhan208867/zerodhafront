import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState(""); // State for success message
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://zerodhafront-lbsc.onrender.com/signup", { username, password });
      setSuccessMessage("Signup successful! Kindly login."); // Show success message
      setTimeout(() => navigate("/login"), 2000); // Redirect after 2 seconds
    } catch (error) {
      console.error("Signup failed", error);
    }
  };

  return (
    <>
      <form onSubmit={handleSignup} className="container mt-5 p-4 border rounded shadow-sm bg-light" style={{ maxWidth: "400px" }}>
        <h3 className="text-center mb-4">Sign Up</h3>

        {successMessage && (
          <div className="alert alert-success text-center" role="alert">
            {successMessage}
          </div>
        )}

        <div className="mb-3">
          <label className="form-label">Username</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter username" 
            onChange={(e) => setUsername(e.target.value)} 
            required 
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input 
            type="password" 
            className="form-control" 
            placeholder="Enter password" 
            onChange={(e) => setPassword(e.target.value)} 
            required 
          />
        </div>

        <button type="submit" className="btn btn-success w-100">Sign Up</button>
      </form>
    </>
  );
};

export default Signup;
