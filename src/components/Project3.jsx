import { useState, useEffect } from "react";


import blink1 from "../assets/Blinkit/blink1.png";
import blink2 from "../assets/Blinkit/blink2.png";
import blink3 from "../assets/Blinkit/blink3.png";
import blink4 from "../assets/Blinkit/blink4.png";

import mob1 from "../assets/Blinkit/mob1.png";
import mob2 from "../assets/Blinkit/mob2.png";
import mob3 from "../assets/Blinkit/mob3.png";

import "./Project3.css";

function Project3() {

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
      <div className="project3-container">

        <div className="project3-content">

          <p className="project3-heading">Blinkit Analysis</p>

          <p className="project3-description">
            This dashboard analyzes Blinkit sales data using filters, charts, and interactive components.
          </p>

          {isMobile ? (
            <div className="project3-mobile">
              <img src={mob1} alt="mobile1"  loading="lazy" decoding="async"  />
                <div className="img-text">
<p><b>Dashboard with Filters and Contextual Analysis:</b></p>

<p>
This dashboard provides an interactive interface where users can analyze Blinkit sales data using multiple filters. 
The left panel contains filter options that allow users to refine the data based on specific conditions.
</p>

<p><b>Filter Options:</b></p>
<p><li><b>Outlet Location Type:</b> Users can select Tier 1, Tier 2, etc. to filter data.</li></p>
<p><li><b>Outlet Size:</b> Allows selection of Small, Medium, or Large outlets.</li></p>
<p><li><b>Item Type:</b> Users can choose categories like Breakfast, Dairy, Frozen Foods, etc.</li></p>
<p><li>Filters help in narrowing down the dataset for better insights.</li></p>

<p><b>Dashboard Metrics:</b></p>
<p><li><b>Total Sales:</b> Displays the total revenue generated.</li></p>
<p><li><b>Average Sales:</b> Shows average sales per item.</li></p>
<p><li><b>Number of Items:</b> Total items available or sold.</li></p>
<p><li><b>Average Rating:</b> Represents customer satisfaction.</li></p>

<p><b>Interactive Visualization:</b></p>
<p><li>Charts update automatically when filters are applied.</li></p>
<p><li>Donut chart shows sales distribution.</li></p>
<p><li>Bar chart represents item-wise performance.</li></p>
<p><li>Tables provide detailed numerical insights.</li></p>

<p><b>Key Insight:</b></p>
<p>
The dashboard demonstrates how complex filter interactions allow users to explore data efficiently. 
By selecting and expanding filters, users can perform detailed analysis and gain meaningful insights from the dataset.
</p>
                </div>
              <img src={mob2} alt="mobile2" />
                <div className="img-text">
<p><b>Dynamic Dashboard with Navigation Control:</b></p>

<p>
This dashboard demonstrates how user navigation and selection dynamically update the displayed data. 
It provides a responsive interface where changes in filters or tabs instantly reflect across all visual components.
</p>

<p><b>Key Metrics Display:</b></p>
<p><li><b>Total Sales:</b> Shows the overall revenue generated.</li></p>
<p><li><b>Average Sales:</b> Displays average transaction value.</li></p>
<p><li><b>Number of Items:</b> Represents total items available.</li></p>
<p><li><b>Average Rating:</b> Indicates customer satisfaction.</li></p>

<p><b>Navigation and Interaction:</b></p>
<p><li>Dashboard updates based on user navigation and selection.</li></p>
<p><li>Tabs like Total Sales, Avg Sales, No. of Items, and Avg Rating control the view.</li></p>
<p><li>User interaction helps in switching between different data perspectives.</li></p>

<p><b>Visualization Components:</b></p>
<p><li>Line chart shows yearly sales trends.</li></p>
<p><li>Donut chart represents outlet size distribution.</li></p>
<p><li>Bar chart displays sales by outlet location.</li></p>
<p><li>Table provides detailed numerical insights.</li></p>

<p><b>Key Insight:</b></p>
<p>
The dashboard highlights the importance of interactive navigation in data analysis. 
Users can explore multiple dimensions of the dataset, making it easier to identify trends, patterns, and performance metrics efficiently.
</p>
                </div>
              <img src={mob3} alt="mobile3" />
  <div className="img-text">
<p><b>Performance Analysis and Sales Insights:</b></p>

<p>
This dashboard focuses on analyzing overall performance using key metrics and sales trends. 
It provides a clear view of business growth, customer satisfaction, and outlet performance through visual analytics.
</p>

<p><b>Key Performance Metrics:</b></p>
<p><li><b>Total Sales:</b> Represents the overall revenue generated across all outlets.</li></p>
<p><li><b>Average Sales:</b> Indicates the average sales per transaction.</li></p>
<p><li><b>Number of Items:</b> Shows the total quantity of items sold.</li></p>
<p><li><b>Average Rating:</b> Reflects customer satisfaction and feedback.</li></p>

<p><b>Sales Trend Analysis:</b></p>
<p><li>Line chart visualizes sales growth over different years.</li></p>
<p><li>Helps identify peak performance periods and slow growth phases.</li></p>
<p><li>Useful for forecasting and business planning.</li></p>

<p><b>Outlet and Category Insights:</b></p>
<p><li>Donut chart displays distribution based on outlet size.</li></p>
<p><li>Bar chart compares sales across different outlet locations.</li></p>
<p><li>Table provides detailed breakdown of outlet types and performance.</li></p>

<p><b>User Experience Indicators:</b></p>
<p><li>Average rating highlights customer satisfaction level.</li></p>
<p><li>Helps in identifying areas for improvement.</li></p>

<p><b>Key Insight:</b></p>
<p>
The dashboard enables data-driven decision making by combining performance metrics with trend analysis. 
It helps businesses understand customer behavior, optimize operations, and improve overall efficiency.
</p>     </div>
                </div>
            
          ) : (
            <div className="project3-desktop">





              {/* -------- IMAGE 1 -------- */}
              <div className="img-block">
                <img src={blink1} alt="blink1"  loading="lazy" decoding="async"/>

                <div className="img-text">
<p><b>Dashboard with Filters and Contextual Analysis:</b></p>

<p>
This dashboard provides an interactive interface where users can analyze Blinkit sales data using multiple filters. 
The left panel contains filter options that allow users to refine the data based on specific conditions.
</p>

<p><b>Filter Options:</b></p>
<p><li><b>Outlet Location Type:</b> Users can select Tier 1, Tier 2, etc. to filter data.</li></p>
<p><li><b>Outlet Size:</b> Allows selection of Small, Medium, or Large outlets.</li></p>
<p><li><b>Item Type:</b> Users can choose categories like Breakfast, Dairy, Frozen Foods, etc.</li></p>
<p><li>Filters help in narrowing down the dataset for better insights.</li></p>

<p><b>Dashboard Metrics:</b></p>
<p><li><b>Total Sales:</b> Displays the total revenue generated.</li></p>
<p><li><b>Average Sales:</b> Shows average sales per item.</li></p>
<p><li><b>Number of Items:</b> Total items available or sold.</li></p>
<p><li><b>Average Rating:</b> Represents customer satisfaction.</li></p>

<p><b>Interactive Visualization:</b></p>
<p><li>Charts update automatically when filters are applied.</li></p>
<p><li>Donut chart shows sales distribution.</li></p>
<p><li>Bar chart represents item-wise performance.</li></p>
<p><li>Tables provide detailed numerical insights.</li></p>

<p><b>Key Insight:</b></p>
<p>
The dashboard demonstrates how complex filter interactions allow users to explore data efficiently. 
By selecting and expanding filters, users can perform detailed analysis and gain meaningful insights from the dataset.
</p>
                </div>
              </div>

              {/* -------- IMAGE 2 -------- */}
              <div className="img-block">
                <img src={blink3} alt="blink3" />

                <div className="img-text">
<p><b>Dynamic Dashboard with Navigation Control:</b></p>

<p>
This dashboard demonstrates how user navigation and selection dynamically update the displayed data. 
It provides a responsive interface where changes in filters or tabs instantly reflect across all visual components.
</p>

<p><b>Key Metrics Display:</b></p>
<p><li><b>Total Sales:</b> Shows the overall revenue generated.</li></p>
<p><li><b>Average Sales:</b> Displays average transaction value.</li></p>
<p><li><b>Number of Items:</b> Represents total items available.</li></p>
<p><li><b>Average Rating:</b> Indicates customer satisfaction.</li></p>

<p><b>Navigation and Interaction:</b></p>
<p><li>Dashboard updates based on user navigation and selection.</li></p>
<p><li>Tabs like Total Sales, Avg Sales, No. of Items, and Avg Rating control the view.</li></p>
<p><li>User interaction helps in switching between different data perspectives.</li></p>

<p><b>Visualization Components:</b></p>
<p><li>Line chart shows yearly sales trends.</li></p>
<p><li>Donut chart represents outlet size distribution.</li></p>
<p><li>Bar chart displays sales by outlet location.</li></p>
<p><li>Table provides detailed numerical insights.</li></p>

<p><b>Key Insight:</b></p>
<p>
The dashboard highlights the importance of interactive navigation in data analysis. 
Users can explore multiple dimensions of the dataset, making it easier to identify trends, patterns, and performance metrics efficiently.
</p>
                </div>
              </div>

              {/* -------- IMAGE 3 -------- */}
              <div className="img-block">
                <img src={blink4} alt="blink4" />

                <div className="img-text">
<p><b>Performance Analysis and Sales Insights:</b></p>

<p>
This dashboard focuses on analyzing overall performance using key metrics and sales trends. 
It provides a clear view of business growth, customer satisfaction, and outlet performance through visual analytics.
</p>

<p><b>Key Performance Metrics:</b></p>
<p><li><b>Total Sales:</b> Represents the overall revenue generated across all outlets.</li></p>
<p><li><b>Average Sales:</b> Indicates the average sales per transaction.</li></p>
<p><li><b>Number of Items:</b> Shows the total quantity of items sold.</li></p>
<p><li><b>Average Rating:</b> Reflects customer satisfaction and feedback.</li></p>

<p><b>Sales Trend Analysis:</b></p>
<p><li>Line chart visualizes sales growth over different years.</li></p>
<p><li>Helps identify peak performance periods and slow growth phases.</li></p>
<p><li>Useful for forecasting and business planning.</li></p>

<p><b>Outlet and Category Insights:</b></p>
<p><li>Donut chart displays distribution based on outlet size.</li></p>
<p><li>Bar chart compares sales across different outlet locations.</li></p>
<p><li>Table provides detailed breakdown of outlet types and performance.</li></p>

<p><b>User Experience Indicators:</b></p>
<p><li>Average rating highlights customer satisfaction level.</li></p>
<p><li>Helps in identifying areas for improvement.</li></p>

<p><b>Key Insight:</b></p>
<p>
The dashboard enables data-driven decision making by combining performance metrics with trend analysis. 
It helps businesses understand customer behavior, optimize operations, and improve overall efficiency.
</p>
                </div>
              </div>

            </div>
          )}

        </div>
      </div>

   
    </>
  );
}

export default Project3;