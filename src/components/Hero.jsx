import "./Hero.css"

import profile1 from "../assets/gaurav-img.png"

import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"

function Hero() {
  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-image">
          <img src={profile1} alt="profile"/>
        </div>

        <div className="hero-text">

          <h1>Gaurav Gupta</h1>

          <h3>Software Engineer</h3>

          <p>
            I am a Computer Engineering graduate interested in Data Analytics, AI/ML and Software Development.
          </p>

          <hr/>

          <p>
            <b>Interests :</b> Data Analytics, Machine Learning, Web Development
          </p>

          <hr/>

          <div className="hero-icons">

            {/* Email */}
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gauravgupta91332@gmail.com" target="_blank">
    <FaEnvelope />
  </a>


            {/* GitHub */}
            <a href="https://github.com/gauravgupta" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

            {/* LinkedIn */}
            <a href="https://linkedin.com/in/gauravgupta" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>

            {/* Twitter */}
<a href="https://x.com/gauravgupt951" target="_blank" rel="noopener noreferrer">
  <FaTwitter />
</a>

            {/* Instagram */}
<a href="https://www.instagram.com/gauravguptaa_/" target="_blank" rel="noopener noreferrer">
  <FaInstagram />
</a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero