import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-dark text-light p-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="mb-2">
              <Link to="/contact" className="text-light h5">Contact us</Link>
            </div>
            <p className="mb-0">Phone: 123-456-7890</p>
            <p className="mb-0 pb-3">Email: info@example.com</p>
          </div>
          <div className="col-md-4">
            <h5 className="mb-2">Social Media</h5>
            <p className="mb-0">Facebook</p>
            <p className="mb-0">Instagram</p>
            <p className="mb-0 pb-3">Twitter</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;