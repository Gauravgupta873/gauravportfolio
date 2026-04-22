import "./Hero.css"
import { useState, useEffect } from "react"

import profile1 from "../assets/optimized/profile.webp"

import { FaEnvelope, FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa"

function Hero() {

  const roles = [
    "Software Developer | Problem Solver",
    "Data Analyst",
    "Always Learning | Always Growing"
  
  ]

  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const current = roles[index]

    const timeout = setTimeout(() => {
      if (isDeleting) {
        setText(current.substring(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
      } else {
        setText(current.substring(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
      }

      if (!isDeleting && charIndex === current.length) {
        setTimeout(() => setIsDeleting(true), 1500)
      } 
      else if (isDeleting && charIndex === 0) {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % roles.length)
      }

    }, isDeleting ? 30 : 70)

    return () => clearTimeout(timeout)

  }, [charIndex, isDeleting, index])

  return (
    <section className="hero">

      <div className="hero-container">

        <div className="hero-image">
          <img src={profile1} alt="profile" loading="eager" decoding="async" />
        </div>

        <div className="hero-text">

          <h1>Gaurav Gupta</h1>

          {/* 🔥 CHANGED PART */}
          <h3>
            {text}
            <span className="cursor">|</span>
          </h3>

          <p>
            I am a Computer Engineering graduate interested in Data Analytics, AI/ML and Software Development.
          </p>

          <hr />

          <p>
            <b>Interests :</b> Data Analytics, Machine Learning, Web Development
          </p>

          <hr />

          <div className="hero-icons">

            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=gauravgupta91332@gmail.com" target="_blank">
              <FaEnvelope />
            </a>

            <a href="https://github.com/Gauravgupta873/" target="_blank" rel="noopener noreferrer">
              <FaGithub />
            </a>

            <a href="https://www.linkedin.com/in/gaurav-gupta-58746a2bb" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>

            <a href="https://x.com/GauravGuptaa3" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>

            <a>
              <FaInstagram />
            </a>

          </div>

        </div>

      </div>

    </section>
  )
}

export default Hero