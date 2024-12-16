import React from 'react'
import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
    <div className="container-footer">
      <div className="footer-section">
        <div className="footer-logo">
          <h3>TailGrids</h3>
          <p>
            Lorem ipsum dolor amet consectetur adipiscing elit do eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>
        <div className="footer-links">
          <h4>Company</h4>
          <ul>
            <li><a href="#">About company</a></li>
            <li><a href="#">Company services</a></li>
            <li><a href="#">Job opportunities</a></li>
            <li><a href="#">Creative people</a></li>
            <li><a href="#">Contact us</a></li>
          </ul>
        </div>
        <div className="footer-links">
          <h4>Customer</h4>
          <ul>
            <li><a href="#">Client support</a></li>
            <li><a href="#">Latest news</a></li>
            <li><a href="#">Company story</a></li>
            <li><a href="#">Pricing packages</a></li>
            <li><a href="#">Who we are</a></li>
          </ul>
        </div>
        <div className="footer-newsletter">
          <h4>Subscribe To Newsletter</h4>
          <p>Enter your email address for receiving valuable newsletters.</p>
          <form>
            <input type="email" placeholder="Your Email" required/>
            <button type="submit"><i className="fas fa-envelope"></i></button>
          </form>
          <p>&copy; 2025 TailGrids</p>
        </div>
      </div>
    </div>
  </footer>
  
  )
}

export default Footer