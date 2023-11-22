
import React from "react";
import "../css/FooterNFT.css";

function FooterNFT() {
  return (
    <footer className="footer mt-4">
      <div className="copyright">
        <p>&copy; 2023 - Players</p>
      </div>
      <div className="contact">
        <p>Contact us:</p>
        <ul className="social-icons">
          <li>
            <a href="#" className="icon-link">
              <i className="fab fa-twitter"></i>
            </a>
          </li>
          <li>
            <a href="#" className="icon-link">
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a href="#" className="icon-link">
              <i className="far fa-envelope"></i> {/* Use the Gmail icon */}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default FooterNFT;
