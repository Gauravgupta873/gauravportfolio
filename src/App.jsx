import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Experience from "./components/Experience";

import Project1 from "./components/Project1";
import Project2 from "./components/Project2";
import Project3 from "./components/Project3";
import Project4 from "./components/Project4";
import Project5 from "./components/Project5";
import Project6 from "./components/Project6";

import Allproject from "./components/Allproject";
import ScrollToTop from "./components/ScrollToTop";

import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  const [showMessage, setShowMessage] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    if (isMobile) {
      setShowMessage(true);

      setTimeout(() => {
        setShowMessage(false);
      }, 4000);
    }
  }, []);

  // ✅ AUTO PRELOAD ALL IMAGES
  useEffect(() => {
    const images = import.meta.glob("./assets/Optimized/*.webp", {
      eager: true,
    });

    Object.values(images).forEach((imgModule) => {
      const img = new Image();
      img.src = imgModule.default;
    });
  }, []);

  return (
    <>
      <ScrollToTop />
      <Navbar />

      {showMessage && (
        <div className="mobile-msg">
          👉 Desktop recommended 💻
        </div>
      )}

      {/* ✅ CHANGE: wait → sync */}
      <AnimatePresence mode="sync">
        <Routes location={location} key={location.pathname}>

          {/* HOME */}
          <Route
            path="/"
            element={
              <motion.div
                initial={{ opacity: 0, transform: "translateY(30px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                exit={{ opacity: 0, transform: "translateY(-30px)" }}
                transition={{ duration: 0.2 }}
              >
                <Hero />
                <Skills />
                <Projects />
              </motion.div>
            }
          />

          {/* EXPERIENCE */}
          <Route
            path="/experience"
            element={
              <motion.div
                initial={{ opacity: 0, transform: "translateY(30px)" }}
                animate={{ opacity: 1, transform: "translateY(0px)" }}
                exit={{ opacity: 0, transform: "translateY(-30px)" }}
                transition={{ duration: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
              >
                <Experience />
              </motion.div>
            }
          />

          {/* PROJECT PAGES */}
          <Route path="/project1" element={<motion.div initial={{ opacity: 0, transform: "translateY(30px)" }} animate={{ opacity: 1, transform: "translateY(0px)" }} exit={{ opacity: 0, transform: "translateY(-30px)" }} transition={{ duration: 0.2 }}><Project1 /></motion.div>} />
          <Route path="/project2" element={<motion.div initial={{ opacity: 0, transform: "translateY(30px)" }} animate={{ opacity: 1, transform: "translateY(0px)" }} exit={{ opacity: 0, transform: "translateY(-30px)" }} transition={{ duration: 0.2 }}><Project2 /></motion.div>} />
          <Route path="/project3" element={<motion.div initial={{ opacity: 0, transform: "translateY(30px)" }} animate={{ opacity: 1, transform: "translateY(0px)" }} exit={{ opacity: 0, transform: "translateY(-30px)" }} transition={{ duration: 0.2 }}><Project3 /></motion.div>} />
          <Route path="/project4" element={<motion.div initial={{ opacity: 0, transform: "translateY(30px)" }} animate={{ opacity: 1, transform: "translateY(0px)" }} exit={{ opacity: 0, transform: "translateY(-30px)" }} transition={{ duration: 0.2 }}><Project4 /></motion.div>} />
          <Route path="/project5" element={<motion.div initial={{ opacity: 0, transform: "translateY(30px)" }} animate={{ opacity: 1, transform: "translateY(0px)" }} exit={{ opacity: 0, transform: "translateY(-30px)" }} transition={{ duration: 0.2 }}><Project5 /></motion.div>} />
          <Route path="/project6" element={<motion.div initial={{ opacity: 0, transform: "translateY(30px)" }} animate={{ opacity: 1, transform: "translateY(0px)" }} exit={{ opacity: 0, transform: "translateY(-30px)" }} transition={{ duration: 0.2 }}><Project6 /></motion.div>} />

          {/* ALL PROJECT */}
          <Route path="/allprojects" element={<motion.div initial={{ opacity: 0, transform: "translateY(30px)" }} animate={{ opacity: 1, transform: "translateY(0px)" }} exit={{ opacity: 0, transform: "translateY(-30px)" }} transition={{ duration: 0.2 }}><Allproject /></motion.div>} />

        </Routes>
      </AnimatePresence>

      <Footer />
    </>
  );
}

export default App;