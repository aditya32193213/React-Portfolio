import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="py-3 text-center footer-style">
        <div>
          Made with{" "}
          <span
            className="heart-icon"
            role="img"
            aria-label="love"
          >
            ❤️
          </span>{" "}
          by Aditya
        </div>

        <div
          style={{
            fontSize: "0.6em",
            marginTop: "8px",
            color: "#66fcf1",
          }}
        >
          <span role="img" aria-label="copyright">
            ©
          </span>{" "}
          {new Date().getFullYear()} • All Rights Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
