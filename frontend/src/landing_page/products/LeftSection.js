import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDesription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container my-5">
      <div className="row align-items-center">
        
        {/* Image Section */}
        <div className="col-md-6 mb-4 mb-md-0">
          <img src={imageURL} alt="Product" className="img-fluid" />
        </div>

        {/* Content Section */}
        <div className="col-md-6 p-4">
          <h1 className="mb-3">{productName}</h1>
          <p className="mb-4">{productDesription}</p>

          {/* Buttons */}
          <div className="mb-4">
            <a href={tryDemo} className="btn btn-primary me-4">
              Try Demo
            </a>
            <a href={learnMore} className="btn btn-outline-primary">
              Learn More
            </a>
          </div>

          {/* Store Badges */}
          <div>
            <a href={googlePlay}>
              <img
                src="media/images/googlePlayBadge.svg"
                alt="Google Play"
                className="img-fluid"
              />
            </a>
            <a href={appStore} className="ms-4">
              <img
                src="media/images/appstoreBadge.svg"
                alt="App Store"
                className="img-fluid"
              />
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

export default LeftSection;
