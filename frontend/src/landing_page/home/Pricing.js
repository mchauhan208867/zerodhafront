import React from "react";

function Pricing() {
  return (
    <div className="container py-5">
      <div className="row gy-4 align-items-start">

        {/* Left Section */}
        <div className="col-md-4">
          <h1 className="fw-bold mb-3 display-6">Unbeatable pricing</h1>
          <p className="text-muted mb-3">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href="#"
            className="text-primary text-decoration-none d-flex align-items-center gap-2"
          >
            See Pricing <i className="fa fa-long-arrow-right" />
          </a>
        </div>

        {/* Right Section */}
        <div className="col-md-8">
          <div className="row g-4">

            {/* Card 1 */}
            <div className="col-12 col-md-6">
              <div className="border rounded p-4 text-center h-100">
                <h1 className="fw-bold display-5 mb-2">₹0</h1>
                <p className="text-muted">
                  Free equity delivery <br />
                  and direct mutual funds
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="col-12 col-md-6">
              <div className="border rounded p-4 text-center h-100">
                <h1 className="fw-bold display-5 mb-2">₹20</h1>
                <p className="text-muted">Intraday and F&O</p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}

export default Pricing;
