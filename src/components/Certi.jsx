import React from "react";
import "./Certi.css";
import certi from "../assets/certi.jpg";

function Certi() {
  return (
    <section className="certi-section">

      <div className="certi-container">
        <img src={certi} alt="Certificate 1" className="certi-img small" />
        <img src={certi} alt="Certificate 2" className="certi-img large" />
      </div>

    </section>
  );
}

export default Certi;