import React from "react";
import "./Experience.css";
import myImg from "../assets/guarv.png";

const Experience = () => {
  return (
    <div className="experience-container">

      {/* 🔥 TOP BANNER */}
      <div className="experience-banner">

        <div className="experience-left">
          <h1>Hello</h1>
          <p>“ नमस्ते 🙏”</p>
        </div>

        <div className="experience-right">
          <img src={myImg} alt="My Image" />
        </div>

      </div>

      {/* 🔥 ABOUT SECTION */}
      <div className="about-section">

        <h2>About Me</h2>

<p>
I am a Computer Engineering student skilled in both full-stack development and data analytics. 
I build scalable MERN applications and analyze data using Python, SQL, and Power BI to generate 
actionable insights. With hands-on project experience and a Software Engineering internship, 
I focus on performance, clean code, and real-world problem solving.
</p>
      </div>
      {/* 🔥 EDUCATION SECTION */}
<div className="education-section">

  <h2>Education</h2>

  <div className="timeline">

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <span>2015 - 2022</span>
        <h3>B.Tech</h3>
        <p>Bharati Vidyapeeth (Deemed to be University) College of Engineering (BVDUCOE), Pune</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <span>2021 - 2022</span>
        <h3>Higher Secondary School</h3>
        <p>St.Xaviers High Secondary School</p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <span>2019 - 2020</span>
        <h3>Secondary School</h3>
        <p>St.Xaviers High Secondary School.</p>
      </div>
    </div>

  </div>

</div>
     {/* 🔥 EDUCATION SECTION */}
<div className="education-section">

  <h2>Experience</h2>

  <div className="timeline">

{/*
             <div className="timeline-item">
               <div className="timeline-dot"></div>
               <div className="timeline-content">
                 <span>2015 - 2022</span>
                 <h3>B.Tech</h3>
                 <p>Bharati Vidyapeeth (Deemed to be University) College of Engineering (BVDUCOE), Pune</p>
                </div>
              </div>
    
 */}

    <div className="timeline-item">
      <div className="timeline-dot"></div>
      <div className="timeline-content">
        <span>2025</span>
        <h3>Software Engineer Intern</h3>
        <p>V&K Softech Solutions PVT.LTD, Pune</p>
        <p>Developed responsive and scalable web applications during internship.
Focused on performance optimization and improving user experience.</p>
      </div>
    </div>

  </div>

</div>


    </div>
  );
};

export default Experience;