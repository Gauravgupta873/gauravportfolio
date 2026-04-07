import React from "react";
import "./Skills.css";

import { LiaPython } from "react-icons/lia";
import { FaJava, FaReact, FaNodeJs, FaTools, FaUser, FaCode } from "react-icons/fa";
import { MdOutlineJavascript } from "react-icons/md";
import { PiFileSqlLight } from "react-icons/pi";
import { SiMysql, SiMongodb, SiTailwindcss, SiExpress, SiBootstrap } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";
import { FaDatabase, FaBrain } from "react-icons/fa";

const Skills = () => {

  const skills = [
    { icon: <TbBrandCpp />, name: "C++" },
    { icon: <LiaPython />, name: "Python" },
    { icon: <MdOutlineJavascript />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiTailwindcss />, name: "Tailwind" },
    { icon: <SiBootstrap />, name: "Bootstrap" },
    { icon: <PiFileSqlLight />, name: "SQL" },
    { icon: <FaJava />, name: "Java" },
  ];

  return (
    <div className="skills-section">

      {/* 🔥 SCROLL ICONS */}
      <div className="scroll-container">
        <div className="scroll-track">
          {[...skills, ...skills].map((skill, index) => (
            <div className="skill-item" key={index}>
              <div className="icon">{skill.icon}</div>
              <p>{skill.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 CARD SECTION */}
      <div className="skills-cards">

        <div className="big-card">
          <h2>Design + Tech</h2>
        </div>

        {/* CARD 1 */}
        <div className="card card1">
          <div className="card-front">
            <FaTools className="card-icon"/>
            <h3>Developer Tools</h3>
            <p>Git, GitHub, VS Code, Jupyter Notebook...</p>
          </div>
          <div className="card-back">
            <p>
Using modern tools for efficient and collaborative development...
Hands-on experience with Git, GitHub, VS Code & Jupyter Notebook...
Familiar with WEKA, Cloud-based development workflows...
            </p>
          </div>
        </div>

        {/* CARD 2 */}
        <div className="card card2">
          <div className="card-front">
            <FaDatabase  className="card-icon"/>
            <h3>Database</h3>
            <p>MongoDB, MySQL, Supabase, Firebase...</p>
          </div>
          <div className="card-back">
            <p>
Managing structured and unstructured databases efficiently...
Experience with MongoDB, MySQL, Firebase & Supabase platforms...
Optimizing queries and ensuring scalable backend performance...
            </p>
          </div>
        </div>

        {/* CARD 3 */}
        <div className="card card3">
          <div className="card-front">
            <FaCode className="card-icon"/>
            <h3>Machine Learning & AI</h3>
            <p>LSTM, Scikit-learn, Data Modeling, Prediction Systems...</p>
          </div>
          <div className="card-back">
            <p>
Developing predictive models using machine learning techniques...
Worked with LSTM, regression & Scikit-learn for real-world problems...
Transforming data into intelligent forecasting and analytical systems...
            </p>
          </div>
        </div>

        {/* CARD 4 */}
        <div className="card card4">
          <div className="card-front">
            <FaUser className="card-icon card-icon4"/>
            <h3>Core Computer Science Concepts</h3>
            <p>Data Structure & Algorithms, Object-Oriented Programming...</p>
          </div>
          <div className="card-back">
            <p>
Strong foundation in fundamental computer science concepts...
Knowledge of Data Structures, OOP and system-level programming...
Understanding of Operating Systems and Computer Networks...
            </p>
          </div>
        </div>

      </div>

    </div>
  );
};

export default Skills;