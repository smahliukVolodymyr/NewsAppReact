import React from "react";
import "./Footer.css";
import {
  FaSquareXTwitter,
  FaTiktok,
  FaLinkedin,
  FaSquareFacebook,
  FaInstagram,
} from "react-icons/fa6";

function Footer() {
  return (
    <div className="footer-container">
      <h4>Follow us:</h4>
      <div className="media-container">
        <ul>
          <li>
            <FaInstagram size={32} />
          </li>
          <li>
            <FaSquareXTwitter size={32} />
          </li>
          <li>
            <FaSquareFacebook size={32} />
          </li>
          <li>
            <FaLinkedin size={32} />
          </li>
          <li>
            <FaTiktok size={32} />
          </li>
        </ul>
      </div>
      <p>&copy; 2024 News Update. All rights reserved.</p>
    </div>
  );
}

export default Footer;
