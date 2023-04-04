import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <footer
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          justifyItems: "center",
        }}
      >
        <div>
          <h2>EMAIL ADDRESS</h2>
          <p>hello@reallygreatsite.com</p>
        </div>
        <div>
          <h2>MAILING ADDRESS</h2>
          <p>123 Anywhere St. Any City, ST 12345</p>
        </div>
        <div>
          <h2>PHONE NUMBER</h2>
          <p>(123) 456-7890</p>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
