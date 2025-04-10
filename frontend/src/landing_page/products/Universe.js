import React from "react";

function Universe() {
  return (
    <div className="container my-5">
      <div className="row text-center">
        <h1 className="mb-3">The Zerodha Universe</h1>
        <p className="text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>

      <div className="row text-center mt-4">
        {[...Array(6)].map((_, index) => (
          <div className="col-md-4 p-4" key={index}>
            <img
              src="media/images/smallcaseLogo.png"
              alt="Partner Platform"
              className="img-fluid mb-3"
            />
            <p className="text-muted">Thematic investment platform</p>
          </div>
        ))}
      </div>

      <div className="d-flex justify-content-center mt-4 mb-5">
        <button className="btn btn-primary fs-5 px-4">
          Signup Now
        </button>
      </div>
    </div>
  );
}

export default Universe;
