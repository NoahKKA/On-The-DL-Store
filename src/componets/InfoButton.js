import React, { useState } from "react";
import { InfoCircle, X } from "react-bootstrap-icons";
import "./InfoButton.css";

const InfoButtonWithPopup = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleInfoClick = () => {
    setIsPopupOpen(true);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div>
      <div className="position-fixed bottom-0 end-0 p-3">
        <div className="info-button-container">
          <button className={`btn btn-light`} onClick={handleInfoClick}>
            <InfoCircle />
          </button>
        </div>
      </div>
      {isPopupOpen && (
        <div className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center bg-overlay">
          <div className="bg-overlay-inner">
            <div className="bg-white p-4 rounded shadow position-relative">
              <button
                className="btn btn-sm btn-outline-danger position-absolute top-0 end-0 m-2"
                onClick={handleClosePopup}
              >
                <X />
              </button>
              <h2 className="mb-3">Policies</h2>
              <ul>
                <li>
                  Items are on a First Come, First Serve basis. There will be no
                  holds.  If you are interested, send us a message.
                </li>
                <li>Meetups and pickups only. Shipping is not available.</li>
                <li>
                  When a sale is made, freebies are available for order $10+. Customers will be
                  provided a list and are able to choose an item they want.
                </li>
                <li>ALL SALES FINAL; no returns and/or exchanges.</li>
                <li>
                  Reviews are appreciated. Buyers will be given further
                  information on how to submit one.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InfoButtonWithPopup;
