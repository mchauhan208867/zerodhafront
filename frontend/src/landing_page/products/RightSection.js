import React from "react";

function RightSection({ imageURL, productName, productDesription, learnMore }) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">

        {/* Text Section */}
        <div className="col-md-6 p-4">
          <h1 className="mb-3">{productName}</h1>
          <p className="mb-4">{productDesription}</p>
          <a href={learnMore} className="btn btn-primary">
            Learn More
          </a>
        </div>

        {/* Image Section */}
        <div className="col-md-6 text-center">
          <img src={imageURL} alt="Product" className="img-fluid" />
        </div>

      </div>
    </div>
  );
}

export default RightSection;
