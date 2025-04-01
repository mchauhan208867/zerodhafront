import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Home = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await axios.get("http://localhost:3002/auth", {
          withCredentials: true, // Send cookies with request
        });

        if (response.data.authenticated) {
          setUser(response.data.user);
        } else {
          window.location.href = "http://localhost:3000/login"; // Redirect if not authenticated
        }
      } catch (error) {
        console.error("Authentication check failed:", error);
        window.location.href = "http://localhost:3000/login";
      }
    };

    checkAuth();
  }, [navigate]);

  return user ? (
    <>
      <TopBar />
      <Dashboard />
    </>
  ) : null;
};

export default Home;
