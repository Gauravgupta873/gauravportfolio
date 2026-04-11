import "./Footer.css"
import { useEffect, useRef } from "react"

function Footer(){

  const textRef = useRef(null)

  useEffect(()=>{

    const observer = new IntersectionObserver(
      (entries)=>{
        entries.forEach(entry=>{
          if(entry.isIntersecting){
            entry.target.classList.add("show")
          }
        })
      },
      {threshold:0.4}
    )

    observer.observe(textRef.current)

  },[])

  return(

    <footer className="footer">

      <div className="footer-container">

        <div className="footer-left">
          <h1 ref={textRef}>
            Ready to <br/>
            Collaborate?
          </h1>
        </div>
<div className="footer-right">

<a 
  href="https://mail.google.com/mail/?view=cm&to=gauravgupta91332@gmail.com" 
  target="_blank"
>
  Email
</a>
  <a 
    href="https://github.com/Gauravgupta873/" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    GitHub
  </a>

  <a 
    href="https://www.linkedin.com/in/gaurav-gupta-58746a2bb" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    LinkedIn
  </a>

  <a 
    href="https://x.com/GauravGuptaa3" 
    target="_blank" 
    rel="noopener noreferrer"
  >
    Twitter
  </a>

</div>
      </div>

      <p className="footer-bottom">
        Designed & Built by Gaurav Gupta
      </p>

    </footer>

  )

}

export default Footer