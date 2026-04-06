import React from "react";
import "./Allproject.css";


import banking from "../assets/optimized/banking.webp";
import LoadBalancer from "../assets/optimized/load3.webp";
import olympics from "../assets/optimized/olympics.webp";
import blinkit from "../assets/optimized/blinkit.webp";
import voting from "../assets/optimized/voting.webp";
import stock from "../assets/optimized/stock1.webp";

import { useNavigate } from "react-router-dom";

function Allproject() {
  const navigate = useNavigate();

  const goToProject1 = () => navigate("/project1");
  const goToProject2 = () => navigate("/project2");
  const goToProject3 = () => navigate("/project3");
  const goToProject4 = () => navigate("/project4");
    const goToProject5 = () => navigate("/project5");
    const goToProject6 = () => navigate("/project6");
  return (
    <>
    <div className="ap-container">
      
      <h1 className="ap-title">Projects.</h1>

      <div className="ap-grid">



        {/* CARD 4 */}
        <div className="ap-card ap-bg-4" onClick={goToProject3}>
          <div className="ap-img-box">
            <img src={blinkit} alt="project4" className="ap-img"   loading="eager" decoding="async" />
          </div>
          <div className="ap-content">
            <p className="ap-type ap-type-4">Case Study</p>
            <h3 className="ap-heading ap-heading-4">Blinkit Data Analysis</h3>
          </div>
        </div>



             {/* CARD 6 */}  
        <div className="ap-card ap-bg-6" onClick={goToProject6}>
          <div className="ap-img-box">
            <img src={stock} alt="project6" className="ap-img" loading="eager" decoding="async"  />
          </div>
          <div className="ap-content">
            <p className="ap-type ap-type-6">Case Study</p>
            <h3 className="ap-heading ap-heading-6">Stock Market Prediction</h3>
          </div>
        </div>



        {/* CARD 2 */}
        <div className="ap-card ap-bg-2" onClick={goToProject4}>
          <div className="ap-img-box">
            <img src={LoadBalancer} alt="project2" className="ap-img"  loading="eager" decoding="async" />
          </div>
          <div className="ap-content">
            <p className="ap-type ap-type-2">Frontend</p>
            <h3 className="ap-heading ap-heading-2">Load Balancer </h3>
          </div>
        </div>

        {/* CARD 5 */}
        <div className="ap-card ap-bg-5" onClick={goToProject5}>
          <div className="ap-img-box">
            <img src={voting} alt="project3" className="ap-img"  loading="eager" decoding="async" />
          </div>
          <div className="ap-content">
            <p className="ap-type ap-type-5">UI Design</p>
            <h3 className="ap-heading ap-heading-5">Online Voting System</h3>
          </div>
        </div>


     {/* CARD 1 */}
        <div className="ap-card ap-bg-1" onClick={goToProject1}>
          <div className="ap-img-box">
            <img src={banking} alt="project1" className="ap-img"  loading="eager" decoding="async"  />
          </div>
          <div className="ap-content">
            <p className="ap-type ap-type-1">Full Stack</p>
            <h3 className="ap-heading ap-heading-1">Secure Digital Banking Platform</h3>
          </div>
        </div>
        {/* CARD 3 */}
        <div className="ap-card ap-bg-3" onClick={goToProject2}>
          <div className="ap-img-box">
            <img src={olympics} alt="project3" className="ap-img"  loading="eager" decoding="async" />
          </div>
          <div className="ap-content">
            <p className="ap-type ap-type-3">UI Design</p>
            <h3 className="ap-heading ap-heading-3">Paris Olympics 2024 Analytics</h3>
          </div>
        </div>





      </div>

   
    </div>

    </>
  );
}

export default Allproject;