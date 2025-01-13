import React from 'react';
import './footer.css';
export default function Footer() {
    return(
        <div className="footer">
            <div className="col-1">
                <h3>USEFUL LINKS</h3>
                <a href="#">Home</a>
                <a href="#">About us</a>
                <a href="#">contact us</a>
            </div>
            <div className="col-2">
                <h3>NEWSLETTER</h3>
                <input type="email" placeholder="Enter your email" required/>
                <br/>
                <button type="submit">Subscribe Now</button>
            </div>
            <div className="col-3">
                <h3>CONTACT US</h3>
                <p>123, aydon, irbid, Jordan</p>
            </div>
        </div>
    );
}