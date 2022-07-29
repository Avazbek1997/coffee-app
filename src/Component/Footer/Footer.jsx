import React from "react";
import "./Footer.scss";
import jpg from "./IMAGE (1).png";

const Footer = () => {
  return (
    <div className="footer">
      <ul>
        <li>
            <h8 id="h3"><img src={jpg} alt="" /></h8>
          <ul id="ul1">
            <li>
                <p>Delivering the best coffee life since 1996. From coffee geeks to the real ones.</p>
            </li>
            <li>
                <h6>CoffeeStyle Inc. © 1996</h6>
            </li>
          </ul>
        </li>
        <li>
            <h8 id="h3">Menu</h8>
          <ul id="ul2">
            <li>
                <a href="#">Home</a>
            </li>
            <li>
                <a href="#">Our Products</a>
            </li>
            <li>
                <a href="#">About</a>
            </li>
            <li>
                <a href="#">Contact</a>
            </li>
            <li>
                <a href="#">Styleguide</a>
            </li>
          </ul>
        </li>
        <li>
            <h8 id="h3">Follow Us</h8>
          <ul id="ul3">
             <li>
                <a href="#">Facebook</a>
             </li>
             <li>
                <a href="#">Instagram</a>
             </li>
             <li>
                <a href="#">Pinterest</a>
             </li>
             <li>
                <a href="#">Twitter</a>
             </li>
          </ul>
        </li>
        <li>
            <h8 id="h3">Contact Us</h8>
          <ul id="ul4">
            <li>
                <a href="#">We’re Always Happy to Help</a>
            </li>
            <li>
                <h1>us@coffeestyle.io</h1>
            </li>
            <li>
                <h6>Powered by Webflow</h6>
                </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
