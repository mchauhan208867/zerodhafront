import React from "react";

function Hero() {
  return (
    <section className="container-fluid bg-light" id="supportHero">
      <div className="p-5 bg-primary text-white" id="supportWrapper">
        <h4>Support Portal</h4>
        <a href="" className="text-white text-decoration-underline">
          Track Tickets
        </a>
      </div>

      <div className="row px-5 py-4 mx-3">
        <div className="col-md-6 p-3">
          <h1 className="fs-3 mb-3">
            Search for an answer or browse help topics to create a ticket
          </h1>
          <input
            type="text"
            className="form-control mb-4"
            placeholder="Eg. how do I activate F&O"
          />

          <div className="d-flex flex-column gap-2">
            <a href="#">Track account opening</a>
            <a href="#">Track segment activation</a>
            <a href="#">Intraday margins</a>
            <a href="#">Kite user manual</a>
          </div>
        </div>

        <div className="col-md-6 p-3">
          <h1 className="fs-3 mb-3">Featured</h1>
          <ol className="ps-3">
            <li className="mb-2">
              <a href="#">Current Takeovers and Delisting - January 2024</a>
            </li>
            <li>
              <a href="#">Latest Intraday leverages - MIS & CO</a>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
