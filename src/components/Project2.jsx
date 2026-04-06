import { useState, useEffect } from "react";


import landingpage from "../assets/Optimized/Landingpage.webp";

import mobile from "../assets/Optimized/mobile.webp";
import mobile2 from "../assets/Optimized/mobile2.webp";
import mobile3 from "../assets/Optimized/mobile3.webp";
import mobile4 from "../assets/Optimized/mobile4.webp";
import mobile5 from "../assets/Optimized/mobile5.webp";
import mobile6 from "../assets/Optimized/mobile6.webp";

import paris1 from "../assets/Optimized/paris1.webp";
import paris2 from "../assets/Optimized/paris2.webp";
import paris3 from "../assets/Optimized/paris3.webp";
import paris4 from "../assets/Optimized/paris4.webp";
import paris5 from "../assets/Optimized/paris5.webp";
import paris6 from "../assets/Optimized/paris5.webp";

import "./Project2.css";

function Project2() {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 500);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 500);
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="project2">

        <div className="project2-content">

          <h1 className="project2-heading">Paris Olympics 2024 Analytics</h1>

 
          {isMobile ? (
            <>
              
              <img src={mobile} alt="mobile"   loading="lazy" decoding="async" />
<p><b>Paris Olympics 2024 Analytics Dashboard:</b></p>

<p>
This project showcases a visually engaging and interactive analytics dashboard designed for the Paris Olympics 2024. 
It simplifies complex datasets into meaningful insights, allowing users to explore athlete performance, medal distribution, 
and country-wise comparisons in a clear and intuitive manner.
</p>

<p><b>Key Highlights:</b></p>

<p><li><b>Modern UI Design:</b> Clean and visually appealing dashboard for better user experience.</li></p>
<p><li><b>Data Visualization:</b> Interactive charts and graphs for easy understanding of complex data.</li></p>
<p><li><b>Comprehensive Insights:</b> Covers athletes, teams, and participating countries.</li></p>
<p><li><b>Responsive Layout:</b> Optimized for seamless performance across mobile, tablet, and desktop devices.</li></p>
              <img src={mobile2} alt="mobile1"  loading="eager" decoding="async" />
<p><b>Country Performance Comparison Module:</b></p>

<p>
This module is designed to provide an interactive comparison of performance metrics across multiple countries. 
It enables users to explore variations in medal counts, athlete participation, and overall performance through 
dynamic visualizations that update based on user selection, making analysis more efficient and insightful.
</p>

<p><b>Key Functionalities:</b></p>

<p><li><b>Smart Country Selection:</b> Compare multiple countries with ease.</li></p>
<p><li><b>Dynamic Visualization:</b> Charts and data update instantly on selection.</li></p>
<p><li><b>Insight Panels:</b> Highlight important metrics for quick understanding.</li></p>
<p><li><b>Visual Analytics:</b> Interactive graphs enhance comparative analysis.</li></p>

    <img src={mobile3} alt="mobile3"  loading="eager" decoding="async"  />
<p><b>Interactive Country Comparison Module:</b></p>

<p>
This module enables users to compare performance metrics across multiple countries in an interactive manner. 
By dynamically updating visualizations based on user selection, it helps in identifying trends related to medal counts, 
athlete participation, and overall performance, making the analysis more intuitive and data-driven.
</p>

<p><b>Key Features:</b></p>

<p><li><b>Country Selection:</b> Compare multiple countries with ease.</li></p>
<p><li><b>Real-Time Updates:</b> Instant refresh of charts and statistics based on selection.</li></p>
<p><li><b>Insight Highlights:</b> Key information displayed for quick understanding.</li></p>
<p><li><b>Interactive Visuals:</b> Dynamic charts for better comparison and analysis.</li></p>
              <img src={mobile4} alt="mobile4"  loading="eager" decoding="async" />
<p><b>Comprehensive Medal Breakdown and Analysis:</b></p>

<p>
This module provides a detailed analysis of medal distribution across countries, focusing on gold, silver, and bronze achievements. 
It utilizes clean and well-structured visual elements to simplify complex datasets, enabling users to easily interpret data and 
gain meaningful insights into overall performance.
</p>

<p><b>Key Elements:</b></p>

<p><li><b>Medal Classification:</b> Clear segregation of gold, silver, and bronze medals.</li></p>
<p><li><b>Cross-Country Comparison:</b> Analyze and compare performance across different nations.</li></p>
<p><li><b>Structured Presentation:</b> Organized layout for improved readability and clarity.</li></p>
<p><li><b>Visual Insights:</b> Graphical representation for better understanding of data patterns.</li></p>
              <img src={mobile5} alt="mobile5"  loading="eager" decoding="async"  />
              <p>Country Search implementation for easy navigation and data exploration</p>

              <img src={mobile6} alt="mobile6"  loading="eager" decoding="async"  />
<p><b>Time-Series Analysis and Historical Insights:</b></p>

<p>
This feature enables users to analyze historical performance by exploring medal trends across different years. 
Through interactive visualizations, it provides a clear view of how performance evolves over time, helping users 
identify patterns, fluctuations, and long-term progress in a structured manner.
</p>

<p><b>Core Features:</b></p>

<p><li><b>Year-Based Filters:</b> Select specific years for targeted analysis.</li></p>
<p><li><b>Multi-Year Comparison:</b> Compare performance across different time periods.</li></p>
<p><li><b>Trend Evaluation:</b> Identify growth patterns and performance changes.</li></p>
<p><li><b>Interactive Charts:</b> Dynamic and responsive graphs for better visualization.</li></p>       </>
          ) : (
            <p>
              <img src={landingpage} alt="landing"  loading="lazy" decoding="async" />
<p><b>Paris Olympics 2024 Analytics Dashboard:</b></p>

<p>
This project showcases a visually engaging and interactive analytics dashboard designed for the Paris Olympics 2024. 
It simplifies complex datasets into meaningful insights, allowing users to explore athlete performance, medal distribution, 
and country-wise comparisons in a clear and intuitive manner.
</p>

<p><b>Key Highlights:</b></p>

<p><li><b>Modern UI Design:</b> Clean and visually appealing dashboard for better user experience.</li></p>
<p><li><b>Data Visualization:</b> Interactive charts and graphs for easy understanding of complex data.</li></p>
<p><li><b>Comprehensive Insights:</b> Covers athletes, teams, and participating countries.</li></p>
<p><li><b>Responsive Layout:</b> Optimized for seamless performance across mobile, tablet, and desktop devices.</li></p>
              <img src={paris1} alt="paris1"  loading="eager" decoding="async"  />
<p><b>Country Comparison and Performance Analysis Module:</b></p>

<p>
This module enables users to perform interactive country-wise analysis by comparing key performance metrics across different nations. 
It dynamically updates visualizations based on user selection, helping to identify trends in medal counts, athlete participation, 
and overall performance. The feature is designed to provide structured and meaningful insights that support better analysis and decision-making.
</p>

<p><b>Key Features:</b></p>

<p>
  <li><b>Dynamic Comparison:</b> Users can select and compare multiple countries in real-time.</li></p>
<p><li><b>Live Data Updates:</b> Charts and statistics update instantly based on user interaction.</li></p>
<p><li><b>Quick Insights:</b> Highlight sections provide summarized key information.</li></p>
<p><li><b>Interactive Visuals:</b> Engaging charts and graphs enhance data understanding.</li>
</p>    
              <img src={paris2} alt="paris2"  loading="eager" decoding="async"  />
<p><b>Category-Based Filtering and Navigation System:</b></p>

<p>
This feature introduces a dropdown-based filtering mechanism that allows users to explore data by selecting different sports categories. 
It enhances navigation by organizing datasets in a structured manner, enabling users to focus on specific information without unnecessary clutter.
</p>

<p><b>Key Functionalities:</b></p>

<p><li><b>Sports Category Selection:</b> Dropdown menu for browsing various sports.</li></p>
<p><li><b>Smooth Navigation:</b> Seamless transition between different categories.</li></p>
<p><li><b>Focused Analysis:</b> Filters data to display only relevant information.</li></p>
<p><li><b>User-Friendly Design:</b> Simple and intuitive interface for better usability.</li></p>
              <img src={paris3} alt="paris3"  loading="eager" decoding="async" />
<p><b>In-depth Country Insights:</b></p>

<p>
This section focuses on delivering detailed and structured insights for individual countries, allowing users to better understand performance patterns and data distribution.
</p>

<p><b>Highlights:</b></p>

<p><li><b>Country Statistics:</b> Comprehensive data overview for each selected country.</li></p>
<p><li><b>Medal Visualization:</b> Clear representation of gold, silver, and bronze distribution.</li></p>
<p><li><b>Performance Analysis:</b> Insights into athlete contributions and achievements.</li></p>
<p><li><b>Focused View:</b> Selected country data is highlighted for better clarity and comparison.</li></p>
              <img src={paris4} alt="paris4"  loading="eager" decoding="async" />
<p><b>Historical Trends and Time-Based Analysis:</b></p>

<p>
This feature enables users to explore historical data and analyze medal trends across multiple years. 
By leveraging interactive visualizations, it provides a clear understanding of how performance has evolved over time, 
helping users identify patterns, growth, and fluctuations in country-wise achievements.
</p>

<p><b>Key Capabilities:</b></p>

<p><li><b>Year-wise Filtering:</b> Allows users to select specific years for focused analysis.</li></p>
<p><li><b>Multi-Year Comparison:</b> Enables comparison of medal performance across different time periods.</li></p>
<p><li><b>Trend Insights:</b> Helps in identifying performance patterns and long-term progress.</li></p>
<p><li><b>Interactive Graphs:</b> Responsive and dynamic charts for better data visualization.</li></p>
              <img src={paris5} alt="paris5"  loading="eager" decoding="async"  />
<p><b>Global Map Visualization and Geographic Insights:</b></p>

<p>
This feature introduces a global map-based visualization that presents medal distribution across different countries. 
It provides a geographical perspective of performance, enabling users to easily identify top-performing regions and 
analyze global trends. The map seamlessly integrates with other dashboard components to deliver a complete analytical view.
</p>

<p><b>Core Features:</b></p>

<p><li><b>Interactive World Map:</b> Engaging map interface for exploring global data.</li></p>
<p><li><b>Country-wise Distribution:</b> Clear visualization of medals across nations.</li></p>
<p><li><b>Global Insights:</b> Helps identify high-performing regions at a glance.</li></p>
<p><li><b>Integrated Analytics:</b> Works in sync with other dashboard elements for deeper analysis.</li></p>
              <img src={paris6} alt="paris5" loading="eager" decoding="async"  />
<p><b>Medal Distribution and Comparative Analysis:</b></p>

<p>
This feature focuses on providing a detailed breakdown of medal distribution across countries, highlighting gold, silver, 
and bronze achievements. The data is presented through clean and well-structured visual components, making it easier to 
analyze large datasets and extract meaningful insights efficiently.
</p>

<p><b>Key Highlights:</b></p>

<p><li><b>Medal Breakdown:</b> Clear representation of gold, silver, and bronze distribution.</li></p>
<p><li><b>Country Comparison:</b> Enables performance comparison across multiple countries.</li></p>
<p><li><b>Structured Visualization:</b> Organized data layout for better readability.</li></p>
<p><li><b>Analytical Insights:</b> Supports data-driven understanding through visual analytics.</li></p>        

            </p>
          )}

        </div>

      </div>
<div className="project-btn-container">
  <a 
    href="https://app.powerbi.com/view?r=eyJrIjoiZjkxZGMxYzktZDZmOC00NGViLWJkN2ItOTIzNjMyNzYwMGY4IiwidCI6ImJiYzIxNzVlLTUyZDEtNGVkNi1iYzNhLTNhYzQ3OWY1ODM5ZCIsImMiOjEwfQ%3D%3D&pageName=376eaae8ee18a62083ed" 
    target="_blank" 
    rel="noopener noreferrer"
    className="project-btn"
  >
    📊 View Live Dashboard
  </a>
</div>

    </>
  );
}

export default Project2;