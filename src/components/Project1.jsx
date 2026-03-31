import { useState, useEffect } from "react";


import mobile from "../assets/Banking/mobile.png";
import mobile1 from "../assets/Banking/mobile1.png";
import mobile2 from "../assets/Banking/mobile2.png";
import mobile3 from "../assets/Banking/mobile3.png";
import mobile4 from "../assets/Banking/mobile4.png";
import mobile5 from "../assets/Banking/mobile5.png";
import mobile6 from "../assets/Banking/mobile6.png";
import mobile7 from "../assets/Banking/mobile7.png";

import bank1 from "../assets/Banking/bank1.png";
import bank2 from "../assets/Banking/bank2.png";
import bank3 from "../assets/Banking/bank3.png";
import bank5 from "../assets/Banking/bank5.png";
import bank6 from "../assets/Banking/bank6.png";
import bank7 from "../assets/Banking/bank7.png";
import bank8 from "../assets/Banking/bank8.png";
import bank9 from "../assets/Banking/bank9.png";
import bank10 from "../assets/Banking/bank10.png";
import bank11 from "../assets/Banking/bank11.png";

import "./Project1.css";

function Project1() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 500);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="p1-project">

        <p className="p1-heading"><b>Secure Digital Banking</b></p>

        {isMobile ? (
          <>
            <img className="p1-img" src={mobile} loading="lazy"/>

            <p className="p1-text">
              <p>
<b>Modern Banking Landing Page Design:</b><br/><br/>

Designed a modern and visually engaging banking landing page that introduces the platform with a strong first impression. 
The layout focuses on <b>clarity, trust, and usability</b>, ensuring users can quickly understand the core functionalities of the application. 
The hero section highlights essential banking features such as <b>secure transactions, instant transfers, and real-time account insights</b>. 
A clean UI combined with proper spacing and typography improves readability and enhances the overall user experience.
</p>

<p><b>Key Highlights:</b></p>

<ul>
  <li><b>Clean and minimal UI</b> for better readability</li>
  <li><b>Strong call-to-action buttons</b> for user engagement</li>
  <li><b>Financial data visualization</b> for quick understanding</li>
  <li><b>Fully responsive design</b> across all devices</li>
</ul>
    </p>
            <img className="p1-img" src={mobile1} />

            <p className="p1-text">

              <p>
<b>Secure Login & Authentication System:</b><br/><br/>

Implemented a secure and user-friendly login interface with proper validation and authentication mechanisms. 
The system ensures that only <b>authorized users</b> can access their accounts while maintaining ease of use. 
Input validation prevents incorrect data entry, and the interface provides feedback for errors. 
Security measures such as <b>encrypted data handling and verification</b> enhance the reliability of the system.
</p>

<p><b>Key Highlights:</b></p>

<ul>
  <li><b>Input validation</b> for email and password fields</li>
  <li><b>Secure authentication process</b></li>
  <li><b>Clean and simple login UI</b></li>
  <li><b>Error handling</b> with proper user feedback</li>
</ul>
            </p>


            <img className="p1-img" src={mobile2} />

      
            <p className="p1-text">
<p>
<b>Interactive Financial Dashboard:</b><br/><br/>

Developed an intuitive dashboard that provides users with a quick overview of their financial activities. 
The dashboard is designed to display key information such as <b>account balance, income, expenses, and quick actions</b> 
in a structured and user-friendly format. It allows users to make faster decisions by presenting important data visually 
and clearly. The layout ensures <b>smooth navigation</b> and reduces user effort in accessing important features.
</p>

<p><b>Key Highlights:</b></p>

<ul>
  <li><b>Real-time account balance</b> and summary display</li>
  <li><b>Quick action cards</b> like transfer, pay bills, etc.</li>
  <li><b>Visual representation</b> of income and expenses</li>
  <li><b>Organized layout</b> for better usability</li>
</ul>
            </p>
            <img className="p1-img" src={mobile3} />
      <p className="p1-text">
              Developed an intuitive dashboard that provides users with a quick overview of their financial activities.
            </p>
            <img className="p1-img" src={mobile4} />
                  <p className="p1-text">
            <p>
<b>Smooth Account Onboarding Process:</b><br/><br/>

Designed a smooth onboarding process for opening new bank accounts. The system guides users through a 
<b>step-by-step process</b> and simplifies the experience with <b>clear options and pre-filled data</b> to reduce 
user effort and improve overall usability.
</p>

<p><b>Key Highlights:</b></p>

<ul>
  <li><b>Multiple account type selection</b> options</li>
  <li><b>Step-by-step guided process</b></li>
  <li><b>Pre-filled data</b> for convenience</li>
  <li><b>Clear and actionable UI</b></li>
</ul>
</p>
         
            <img className="p1-img" src={mobile5} />

            <p className="p1-text">
<p>
<b>Secure Fund Transfer Module:</b><br/><br/>

Designed a secure and efficient fund transfer module that enables users to send money between accounts seamlessly. 
The system ensures <b>accuracy and safety</b> through proper validation and controlled transaction flow. 
Users can select recipients, enter details, and complete transactions with <b>minimal effort</b>, ensuring a smooth experience.
</p>

<p><b>Key Highlights:</b></p>

<ul>
  <li><b>Account and recipient selection</b> options</li>
  <li><b>Input validation</b> for transaction details</li>
  <li><b>Transaction limits</b> and safety checks</li>
  <li><b>Smooth and user-friendly flow</b></li>
</ul>
 </p>
            <img className="p1-img" src={mobile6} />

   <p className="p1-text">
<p>
<b>Transaction History & Analysis Module:</b><br/><br/>

Built a dynamic transaction history module where users can view, filter, and analyze their past transactions efficiently. 
The interface allows users to track their financial activities with ease by providing <b>clear categorization</b> and 
<b>structured data representation</b>. It helps users gain insights into their <b>spending patterns</b> and manage their finances better.
</p>

<p><b>Key Highlights:</b></p>

<ul>
  <li><b>Filter transactions</b> by category and date</li>
  <li><b>Search functionality</b> for quick access</li>
  <li><b>Status indicators</b> such as completed and pending</li>
  <li><b>Structured table layout</b> for readability</li>
</ul>
</p>    
            <img className="p1-img" src={mobile7} />

            <p className="p1-text">
<p>
<b>Profile Management System:</b><br/><br/>

Created a profile management section where users can update and manage their <b>personal and account-related information</b>. 
The design focuses on <b>simplicity and accessibility</b>, allowing users to edit details easily without confusion. 
A properly structured form ensures a <b>smooth and seamless user experience</b>.
</p>

<p><b>Key Highlights:</b></p>

<ul>
  <li><b>Edit personal details</b> such as name and email</li>
  <li><b>Organized and clean form layout</b></li>
  <li><b>Easy navigation</b> between profile sections</li>
  <li><b>User-friendly interface</b></li>
</ul>
            </p>

       </>
        ) : (
          <>
            <img className="p1-img" src={bank1}  loading="lazy" />

            <p className="p1-text">
 <p>
<b>Modern Banking Landing Page Design:</b><br/><br/>

Designed a modern and visually engaging banking landing page that introduces the platform with a strong first impression. 
The layout focuses on <b>clarity, trust, and usability</b>, ensuring users can quickly understand the core functionalities of the application. 
The hero section highlights essential banking features such as <b>secure transactions, instant transfers, and real-time account insights</b>. 
A clean UI combined with proper spacing and typography improves readability and enhances the overall user experience.
</p>

<p><b>Key Highlights:</b></p>

<ul>
  <li><b>Clean and minimal UI</b> for better readability</li>
  <li><b>Strong call-to-action buttons</b> for user engagement</li>
  <li><b>Financial data visualization</b> for quick understanding</li>
  <li><b>Fully responsive design</b> across all devices</li>
</ul>           
   </p>

            <img className="p1-img" src={bank2} />

            <p className="p1-text">
<p>
<b>Secure Login & Authentication System:</b><br/><br/>

Implemented a secure and user-friendly login interface with proper validation and authentication mechanisms. 
The system ensures that only <b>authorized users</b> can access their accounts while maintaining ease of use. 
Input validation prevents incorrect data entry, and the interface provides feedback for errors. 
Security measures such as <b>encrypted data handling and verification</b> enhance the reliability of the system.
</p>

<p><b>Key Highlights:</b></p>

<ul>
  <li><b>Input validation</b> for email and password fields</li>
  <li><b>Secure authentication process</b></li>
  <li><b>Clean and simple login UI</b></li>
  <li><b>Error handling</b> with proper user feedback</li>
</ul>


            </p>

            <img className="p1-img" src={bank3} />

            <p className="p1-text">
<p>
<b>Interactive Financial Dashboard:</b><br/><br/>

Developed an intuitive dashboard that provides users with a quick overview of their financial activities. 
The dashboard is designed to display key information such as <b>account balance, income, expenses, and quick actions</b> 
in a structured and user-friendly format. It allows users to make faster decisions by presenting important data visually 
and clearly. The layout ensures <b>smooth navigation</b> and reduces user effort in accessing important features.
</p>

<p><b>Key Highlights:</b></p>

<ul>
  <li><b>Real-time account balance</b> and summary display</li>
  <li><b>Quick action cards</b> like transfer, pay bills, etc.</li>
  <li><b>Visual representation</b> of income and expenses</li>
  <li><b>Organized layout</b> for better usability</li>
</ul>
            </p>

            <img className="p1-img" src={bank5} />
 <p className="p1-text">
<p>
<b>Transaction History & Analysis Module:</b><br/><br/>

Built a dynamic transaction history module where users can view, filter, and analyze their past transactions efficiently. 
The interface allows users to track their financial activities with ease by providing <b>clear categorization</b> and 
<b>structured data representation</b>. It helps users gain insights into their <b>spending patterns</b> and manage their finances better.
</p>

<p><b>Key Highlights:</b></p>

<ul>
  <li><b>Filter transactions</b> by category and date</li>
  <li><b>Search functionality</b> for quick access</li>
  <li><b>Status indicators</b> such as completed and pending</li>
  <li><b>Structured table layout</b> for readability</li>
</ul>
</p>
            <img className="p1-img" src={bank6} />

            <p className="p1-text">
 <p>
<b>Secure Fund Transfer Module:</b><br/><br/>

Designed a secure and efficient fund transfer module that enables users to send money between accounts seamlessly. 
The system ensures <b>accuracy and safety</b> through proper validation and controlled transaction flow. 
Users can select recipients, enter details, and complete transactions with <b>minimal effort</b>, ensuring a smooth experience.
</p>

<p><b>Key Highlights:</b></p>

<ul>
  <li><b>Account and recipient selection</b> options</li>
  <li><b>Input validation</b> for transaction details</li>
  <li><b>Transaction limits</b> and safety checks</li>
  <li><b>Smooth and user-friendly flow</b></li>
</ul>
            </p>

            <img className="p1-img" src={bank7} />

            <p className="p1-text">
<p>
<b>Profile Management System:</b><br/><br/>

Created a profile management section where users can update and manage their <b>personal and account-related information</b>. 
The design focuses on <b>simplicity and accessibility</b>, allowing users to edit details easily without confusion. 
A properly structured form ensures a <b>smooth and seamless user experience</b>.
</p>

<p><b>Key Highlights:</b></p>

<ul>
  <li><b>Edit personal details</b> such as name and email</li>
  <li><b>Organized and clean form layout</b></li>
  <li><b>Easy navigation</b> between profile sections</li>
  <li><b>User-friendly interface</b></li>
</ul>
       
           </p>

            <img className="p1-img" src={bank8} />

            <p className="p1-text">
              <p>
<b>Advanced Security Settings:</b><br/><br/>

Integrated advanced security settings to give users complete control over their <b>account protection</b>. 
Features such as <b>password updates and authentication controls</b> enhance account safety and ensure 
secure access to <b>sensitive data</b>.
</p>

<p><b>Key Highlights:</b></p>

<ul>
  <li><b>Password update functionality</b></li>
  <li><b>Two-factor authentication (2FA)</b></li>
  <li><b>Security toggle controls</b></li>
  <li><b>Enhanced account protection</b></li>
</ul>
     </p>

            <img className="p1-img" src={bank9} />

            <p className="p1-text">
<p>
<b>Customizable Preferences & Settings Module:</b><br/><br/>

Developed a customizable preferences section where users can manage their <b>notification settings</b> and 
personalize their overall experience. This feature allows users to <b>control communication</b> and adjust 
settings according to their individual needs, enhancing usability and flexibility.
</p>

<p><b>Key Highlights:</b></p>

<ul>
  <li><b>Email and SMS notification controls</b></li>
  <li><b>Currency and timezone selection</b></li>
  <li><b>Personalized user experience</b></li>
  <li><b>Simple and intuitive UI</b></li>
</ul>
            </p>

            <img className="p1-img" src={bank10} />

            <p className="p1-text">
<p>
<b>Customizable Preferences & Personalization Module:</b><br/><br/>

Developed a customizable preferences section where users can manage their <b>notification settings</b> and personalize 
their experience. This feature enables users to have full control over their <b>communication preferences</b> and adjust 
settings according to their individual needs, resulting in a more flexible and user-centric experience.
</p>

<p><b>Key Highlights:</b></p>

<ul>
  <li><b>Email and SMS notification controls</b></li>
  <li><b>Currency and timezone selection</b></li>
  <li><b>Personalized user experience</b></li>
  <li><b>Simple and intuitive UI</b></li>
</ul>         </p>

            <img className="p1-img" src={bank11} />

            <p className="p1-text">
<p>
<b>Smooth Account Onboarding Process:</b><br/><br/>

Designed a smooth onboarding process for opening new bank accounts. The system guides users through a 
<b>step-by-step process</b> and simplifies the experience with <b>clear options and pre-filled data</b> to reduce 
user effort and improve overall usability.
</p>

<p><b>Key Highlights:</b></p>

<ul>
  <li><b>Multiple account type selection</b> options</li>
  <li><b>Step-by-step guided process</b></li>
  <li><b>Pre-filled data</b> for convenience</li>
  <li><b>Clear and actionable UI</b></li>
</ul>
            </p>
          </>
        )}

      </div>

      <div className="project-btn-container">
        <a
          href="https://secure-digital-banking-platformm.vercel.app/"
          target="_blank"
          rel="noopener noreferrer"
          className="project-btn"
        >
          🚀 View Live Project
        </a>
      </div>

   
    </>
  );
}

export default Project1;