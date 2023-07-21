import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="text-black p-4 pb-4" style={{backgroundColor: '#5c8774'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="mb-2">
              <Link to="/contact" className="text-black h5">Contact us</Link>
            </div>
            <p className="mb-0">Phone: 808.554.9415</p>
            <p className="mb-0 pb-3">Email: onthedl667@gmail.com</p>
          </div>
          <div className="col-md-4">
            <h5 className="mb-2">Social Media</h5>
            <p className="mb-0">Reddit: u/dayzhaxleigh</p>
            <p className="mb-0">Instagram: @onthedl.shs</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;