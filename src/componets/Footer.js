import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Envelope, Instagram, Github} from 'react-bootstrap-icons';
import './Footer.css'

const Footer = () => {
  return (
    <footer className="text-black p-4" style={{ backgroundColor: '#5c8774'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="mb-2">
              <Link to="/contact" className="text-black h5 custom-a-link">Contact us</Link>
            </div>
            
            <p className="mb-0"> <Phone/> Phone: 808.554.9415</p>
            <p className="mb-0 pb-2"> <Envelope/> Email: onthedl667@gmail.com</p>
            <h5>Creator of WebPage</h5>
            <a href='https://github.com/NoahKKA' className='text-black custom-a-link pb-4'><Github/> Github: NoahKKA</a>
          </div>
          <div className="col-md-4">
            <h5 className="mb-2">Social Media</h5>
            <a href='https://www.instagram.com/onthedl.shs/' className='text-black custom-a-link'><p className="mb-0 pb-2"><Instagram/> Instagram: @onthedl.shs</p></a>

            <h5 className='custom-padding'>MIT Licensed</h5>
          </div>
          <div className='col-md-4'>
            <h5>Payments Accepted</h5>
              <ul>
                <li>Cash</li>
                <li>Apple Pay</li>
                <li>Venmo</li>
                <li>Zelle</li>
                <li>Paypal</li>
              </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
