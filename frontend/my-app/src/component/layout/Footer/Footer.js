import React from "react";
import playStore from "../../../images/playstore.png";
import "./Footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="leftFooter">
        <h4>DOWNLOAD OUR APP</h4>
        <p>Download App for Android </p>
        <img src={playStore} alt="playstore" />
      
      </div>

      <div className="midFooter">
        <h1>CuhHub</h1>
        <p>High Quality is our first priority</p>

        <p>Copyrights 2023 &copy; teamCuhHub</p>
      </div>

      <div className="rightFooter">
        <h4>Follow Us</h4>
        <a href="https://www.linkedin.com/in/abandubey3090/">Aban Dubey</a>
        <a href="https://www.linkedin.com/in/devansh-chauhan-88ab98222/">Devansh Chauhan</a>
        <a href="https://www.linkedin.com/in/anurag-kr-mishra/">Anurag Mishra</a>
        <a href="https://www.linkedin.com/in/ajay-bourai-58b502258/">Ajay</a>
      </div>
    </footer>
  );
};

export default Footer;
