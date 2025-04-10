import React from "react";

function Stats() {
  return (
    <div className="container py-5">
      <div className="row align-items-center">

        {/* Left Content Section */}
        <div className="col-md-6 p-3 p-md-5">
          <h1 className="fw-bold mb-4 display-6 text-center text-md-start">
            Trust with confidence
          </h1>

          <div className="mb-4">
            <h4 className="fw-semibold mb-2">Customer-first always</h4>
            <p className="text-muted">
              That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
              worth of equity investments.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold mb-2">No spam or gimmicks</h4>
            <p className="text-muted">
              No gimmicks, spam, "gamification", or annoying push notifications.
              High quality apps that you use at your pace, the way you like.
            </p>
          </div>

          <div className="mb-4">
            <h4 className="fw-semibold mb-2">The Zerodha universe</h4>
            <p className="text-muted">
              Not just an app, but a whole ecosystem. Our investments in 30+ fintech
              startups offer you tailored services specific to your needs.
            </p>
          </div>

          <div>
            <h4 className="fw-semibold mb-2">Do better with money</h4>
            <p className="text-muted">
              With initiatives like Nudge and Kill Switch, we don't just facilitate
              transactions, but actively help you do better with your money.
            </p>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="col-md-6 p-3 p-md-5 text-center">
          <img 
            src="media/images/ecosystem.png" 
            alt="Ecosystem" 
            className="img-fluid"
          />

          <div className="d-flex flex-column flex-md-row justify-content-center gap-3 mt-4">
            <a href="#" className="text-primary text-decoration-none d-flex align-items-center justify-content-center gap-2">
              Explore our products <i className="fa fa-long-arrow-right" />
            </a>

            <a href="#" className="text-primary text-decoration-none d-flex align-items-center justify-content-center gap-2">
              Try Kite demo <i className="fa fa-long-arrow-right" />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default Stats;
