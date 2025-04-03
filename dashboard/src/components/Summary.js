import React from "react";
import React, { useState, useEffect } from "react";
const fetchUserName = async () => {
  try {
    const response = await fetch("https://your-api-endpoint.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ /* any credentials or data */ }),
    });

    if (response.ok) {
      const data = await response.json();
      return data.name; // assuming the response contains 'name' key
    } else {
      throw new Error("Failed to fetch user info");
    }
  } catch (error) {
    console.error("Error fetching user info:", error);
    return "User"; // fallback if the API fails
  }
};

const Summary = () => {

 const [userName, setUserName] = useState("User"); // default "User"
   useEffect(() => {
    const getUserName = async () => {
      const name = await fetchUserName();
      setUserName(name); // update state with the fetched name
    };
    
    getUserName();
  }, []); // Empty dependency array ensures this runs only once when the component mounts
  return (
    <>
      <div className="username">
        <h6>Hi,  {userName}!!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>3.74k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>0</span>{" "}
            </p>
            <p>
              Opening balance <span>3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings (13)</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className="profit">
              1.55k <small>+5.20%</small>{" "}
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>31.43k</span>{" "}
            </p>
            <p>
              Investment <span>29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
