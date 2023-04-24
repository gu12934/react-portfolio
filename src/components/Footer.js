import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        
      <a href="https://www.linkedin.com/in/gurmol-s/" rel="noopener noreferrer" target="_blank">
            <LinkedInIcon /> 
            </a>

       
      </div>
      <p> &copy; 2023 gurmolthedataguy.com</p>
    </div>
  );
}

export default Footer;