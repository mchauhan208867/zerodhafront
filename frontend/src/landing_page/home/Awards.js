import React from 'react';

function Awards() {
  return (
    <div className='container mt-5'>
      <div className='row d-flex flex-column-reverse flex-md-row align-items-center'>
        
        <div className='col-md-6 p-3 p-md-5'>
          <img 
            src='media/images/largestBroker.svg' 
            alt='Largest Broker' 
            className='img-fluid' 
          />
        </div>

        <div className='col-md-6 p-3 p-md-5 text-center text-md-start'>
          <h1>Largest stock broker in India</h1>
          <p className="mb-4">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <div className="row">
            <div className="col-6">
              <ul className="list-unstyled">
                <li>Futures and Options</li>
                <li>Commodity derivatives</li>
                <li>Currency derivatives</li>
              </ul>
            </div>

            <div className="col-6">
              <ul className="list-unstyled">
                <li>Stocks & IPOs</li>
                <li>Direct mutual funds</li>
                <li>Bonds and Govt. Securities</li>
              </ul>
            </div>
          </div>

          <img 
            src="media/images/pressLogos.png" 
            className="img-fluid mt-4" 
            alt="Press Logos" 
          />
        </div>

      </div>
    </div>
  );
}

export default Awards;
