import React from 'react';
import { useNavigate } from "react-router-dom";

function Hero() {
  const navigate = useNavigate();

  return (
    <div className="container py-5 mb-5">
      <div className="row text-center">

        {/* Hero Image */}
        <div className="col-12 mb-4">
          <img
            src="media/images/homeHero.png"
            alt="Hero Banner"
            className="img-fluid"
          />
        </div>

        {/* Heading */}
        <div className="col-12">
          <h1 className="fw-bold display-5 mb-3">Invest in everything</h1>
          <p className="text-muted mb-4">
            Online platform to invest in stocks, derivatives, mutual funds, and more.
          </p>

          {/* Button */}
          <button
            className="btn btn-primary px-4 py-2 fs-5"
            onClick={() => navigate("/signup")}
          >
            Sign Up
          </button>
        </div>

      </div>
    </div>
  );
}

export default Hero;
