import "./Projects.css"


import stock1 from "../assets/Optimized/stockmarket.webp"

import Load2 from "../assets/Optimized/load2.webp"
import banking from "../assets/Optimized/banking.webp"

import olympics from "../assets/Optimized/olympics.webp"

import certi from "../assets/Optimized/certi.webp"

import video2 from "../assets/2.mp4"

import  voting from "../assets/Optimized/Voting.webp"


import { Link, useNavigate } from "react-router-dom";

function Projects() {
const navigate = useNavigate(); 
  return (

    <section className="projects" id="projects">

      <h1 className="projects-title">Projects</h1>

      <div className="projects-grid">

        {/* PROJECT 1 */}
        <Link to="/project1" className="project-link">
          <div className="project-card project1-card">

            <div className="project-header project-header1">
              <div>
                <h2>Secure Digital Banking</h2>
                <p>Full Stack Banking Application</p>
              </div>

              <span className="project-type">
                Web App
              </span>
            </div>

            <img src={banking} alt="banking" className="project-image"  loading="eager" decoding="async" />

          </div>
        </Link>

        {/* PROJECT 4 */}
        <Link to="/project4" className="project-link">
          <div className="project-card project4-card">

            <div className="project-header project-header4">
              <div>
                <h2>Load Balancing Web Server on  Microsoft Azure</h2>
                <p>Microsoft Azure, IIS, Virtual Machines </p>
              </div>

              <span className="project-type">
                Web Server
              </span>
            </div>

            <img src={Load2} alt="LoadBalancer" className="project-image"  loading="eager" decoding="async" />

          </div>
        </Link>


                        {/* PROJECT 5 */}
                <Link to="/project5" className="project-link">
          <div className="project-card project5-card">

            <div className="project-header project-header5">
              <div>
                <h2>Online Voting System </h2>
                <p>Python, Socket Programming, Multithreading, Tkinter </p>
              </div>

              <span className="project-type">
                 Machine Learning 
              </span>
            </div>

            <img src={voting} alt="blinkit" className="project-image"  loading="eager" decoding="async" />

          </div>
        </Link>

        {/* PROJECT 2 */}

                <Link to="/project2" className="project-link">
          <div className="project-card project2-card">

            <div className="project-header project-header2">
              <div>
                <h2>Paris Olympics 2024 Analytics</h2>
                <p>Power BI, DAX</p>
              </div>

              <span className="project-type">
                Data Analytics
              </span>
            </div>

            <img src={olympics} alt="olympics" className="project-image"  loading="eager" decoding="async" />

          </div>
        </Link>
 
        {/* PROJECT 3 
                <Link to="/project3" className="project-link">
          <div className="project-card project3-card">

            <div className="project-header project-header3">
              <div>
                <h2>Uber Ride Data Science Analysis</h2>
                <p>Python, Pandas, NumPy, Matplotlib, Scikit-learn</p>
              </div>

              <span className="project-type">
                 Data Science Analysis 
              </span>
            </div>

            <img src={blinkit} alt="blinkit" className="project-image"/>

          </div>
        </Link> 
        */}



                {/* PROJECT 6 */}
                <Link to="/project6" className="project-link">
          <div className="project-card project6-card">

            <div className="project-header project-header6">
              <div>
                <h2>Stock Market Prediction</h2>
                <p>Python, Machine Learning, LSTM</p>
              </div>

              <span className="project-type">
                 Machine Learning 
              </span>
            </div>

            <img src={stock1} alt="blinkit" className="project-image"  loading="eager" decoding="async" />

          </div>
        </Link>

      </div>





      {/* 🔥 NEW SECTION (PROJECTS KE LAST ME) */}
<div className="projects-bottom-images">

  <div className="img2-wrapper">

    {/* 🔥 LINK INSIDE */}
    <Link to="/allprojects">

      <video
        src={video2}
        autoPlay
        muted
        loop
        playsInline
        className="img2"
      />

      <div className="img-top-text">
        Like these projects?
      </div>

      <div className="img-overlay-text">
        There's more to explore!
      </div>

    </Link>

  </div>

 <div className="img1-wrapper">

  <img src={certi} alt="extra1" className="img1"  loading="eager" decoding="async" />

  <div className="img1-top-text">
  <h2>Certifications</h2>
  <ul>
        <li>NPTEL-SWAYAM: Introduction to Computer and Network Performance Analysis using Queuing Systems.</li>
     <li>NPTEL-SWAYAM: Python For Data Science.</li>
    <li>Accenture Data Analytics and Visualization Job Simulation.</li>
    <li>Trust and Security with Google Cloud.</li>
    <li>Cloud Platform Job Simulation.</li>


  </ul>
  </div>

</div>


</div>

<div 
  className="footer-top-banner"
  onClick={() => navigate("/experience")}
>
  👉 "A glimpse into my experience and achievements — click to explore"
</div>
    </section>
  )
}

export default Projects