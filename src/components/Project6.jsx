

import stock1 from "../assets/optimized/stock1.webp";
import stock2 from "../assets/optimized/stock2.webp";
import stock4 from "../assets/optimized/stock4.webp";

import "./Project6.css";
// add this temporary comment
// fix deploy
function Project6() {
  return (
    <>
      <div className="project6-container">
        <div className="project6-content">

          <p className="project6-heading">
            Stock-Market-Prediction-using-LSTM
          </p>

          <p className="project6-description">
            This project focuses on predicting stock prices using deep learning techniques, specifically Long Short-Term Memory (LSTM) models. It allows users to interactively view predicted vs. actual stock prices using a user-friendly interface.
          </p>


          <div className="project6-image-wrapper">
            <img src={stock1} alt="Stock Prediction Project"  loading="lazy" decoding="async" />
          </div>

          <div className="project6-bottom-content" >

            <p><b>1. INTRODUCTION</b></p>
            <p>
              The stock market allows investors to buy and sell shares, but predicting prices is difficult due to its dynamic nature.
              Traditional methods fail to capture complex patterns. This project uses <b>LSTM</b> to learn patterns over time and predict stock prices.
            </p>

            <p><b>2. OBJECTIVES</b></p>
            <p>The main objectives are:</p>
<p>
            <li>To develop a stock prediction model using LSTM.</li>
            <li>To analyze stock data and identify patterns.</li>
            <li>To apply deep learning for forecasting.</li>
            <li>To compare predicted and actual values.</li>
            <li>To improve accuracy over traditional methods.</li>
</p>
            <p>
              This project highlights the effectiveness of LSTM in real-world applications.
            </p>

            <p><b>3. LITERATURE REVIEW</b></p>
            <p>
              Stock prediction evolved from traditional methods to machine learning and now deep learning.
               LSTM performs better as it can handle time-series data and learn patterns over time.
            </p>

            <p><b>4. SYSTEM ARCHITECTURE / METHODOLOGY</b></p>

            <p>
              1. Data Collection : Data is collected using <b>yfinance</b>.<br/>
              2. Data Preprocessing : Data is cleaned and normalized.<br/>
              3. Model Building : LSTM model using <b>TensorFlow</b> and <b>Keras</b>.<br/>
              4. Training & Prediction : Model predicts future prices.<br/>
              5. Visualization : Results shown using graphs.
            </p>

            <p><b>5. DATA COLLECTION AND PREPROCESSING</b></p>

            <p><b>Data Collection:</b> Data is taken from yfinance.</p>

            <p><b>Data Preprocessing:</b></p>
<p>
            <li><b>Data Cleaning:</b> Handling missing values.</li>
            <li><b>Normalization:</b> Scaling data.</li>
            <li><b>Train-Test Split:</b> Splitting dataset.</li>
            <li><b>Sequence Creation:</b> Preparing data for <b>LSTM</b>.</li>
</p>
            <p>
              These steps improve model accuracy and performance.
            </p>

  <img src={stock2} alt="configure" className="configuree6-img configure66 "  loading="eager" decoding="async"  />
  <img src={stock4} alt="configure" className="configuree6-img configure666 "  loading="eager" decoding="async"  />

<p><b>6. MODEL IMPLEMENTATION (LSTM)</b></p>

<p>
In this project, <b>LSTM</b> is used for predicting stock prices. It is a type of neural network designed for time-series data.
</p>

<p><b>Model Architecture:</b></p>
<p>
The model includes an input layer, LSTM layers, and a dense output layer for prediction.
</p>

<p><b>Working of LSTM:</b></p>
<p>
LSTM uses memory cells and gates to store important information and remove unnecessary data.
</p>

<p><b>Training Process:</b></p>
<p>
The model is trained on historical data to reduce error and improve accuracy over multiple epochs.
</p>

<p><b>Tools and Technologies Used:</b></p>
<p>
<li><b>Python:</b> For implementation</li>
<li><b>TensorFlow & Keras:</b> For building the model</li>
<li><b>NumPy & Pandas:</b> For data handling</li>
<li><b>Matplotlib:</b> For visualization</li>
</p>
<p>
This approach helps in better prediction by learning patterns from past stock data.
</p>

<p><b>7. PREDICTION AND RESULTS</b></p>

<p>
After training the <b>LSTM</b> model, it is used to predict future stock prices based on past data patterns.
</p>

<p>
The predicted values are compared with actual stock prices to check model accuracy.
</p>

<p><b>Results Analysis:</b></p>
<p>
Graphs are used to compare actual and predicted values. The predictions closely follow the real trend, showing good performance.
</p>

<p><b>Performance Evaluation:</b></p>
<p>
The model is evaluated using metrics like <b>Mean Squared Error (MSE)</b>. Lower error means better accuracy.
</p>

<p>
Overall, the results show that <b>LSTM</b> provides reliable and improved stock price prediction.
</p>

<p><b>8. USER INTERFACE (UI)</b></p>

<p>
The project includes a simple and user-friendly interface built using <b>Gradio</b> to interact with the prediction system.
</p>

<p><b>Features of the Interface:</b></p>
<p>
<li>Users can select different stocks for prediction.</li>
<li>Displays graphs of stock data.</li>
<li>Shows actual vs predicted prices.</li>
<li>Helps visualize trends and patterns easily.</li>
</p>
<p>
The interface is clean and easy to use, making results more understandable.
</p>

<p>
Overall, the UI improves usability and makes stock prediction more accessible.
</p>
<p><b>9. ADVANTAGES AND LIMITATIONS</b></p>

<p><b>Advantages:</b></p>
<p>
<li><b>LSTM</b> is effective for time-series data.</li>
<li>Can learn complex patterns from stock data.</li>
<li>Provides better accuracy than traditional methods.</li>
<li>Handles large datasets efficiently.</li>
<li>User-friendly interface for visualization.</li>
</p>
<p><b>Limitations:</b></p>
<p>
<li>Depends on historical data.</li>
<li>Cannot predict sudden market changes.</li>
<li>Accuracy depends on data quality.</li>
<li>Requires high computational resources.</li>
</p>
<p>
Overall, <b>LSTM</b> improves prediction but has limitations due to market uncertainty.
</p>

<p><b>10. CONCLUSION AND FUTURE SCOPE</b></p>

<p><b>Conclusion:</b></p>

<p>
This project develops a stock prediction system using <b>LSTM</b>, which learns patterns from historical data to predict future prices.
</p>

<p>
The results show better accuracy compared to traditional methods, and graphs help in clear understanding of predictions.
</p>

<p>
Overall, the project demonstrates the usefulness of deep learning in stock market prediction.
</p>

<p><b>Future Scope:</b></p>
<p>
<li>Integration of real-time data.</li>
<li>Use of more financial indicators.</li>
<li>Applying advanced or hybrid models.</li>
<li>Deploying as web or mobile app.</li>
<li>Improving UI with advanced features.</li>
</p>
<p>
The system can be enhanced further for better real-world usage.
</p>





          </div>
        </div>
      </div>
      {/* 🔥 LIVE PROJECT BUTTON */}
<div className="project-btn-container">
  <a 
    href="https://github.com/Gauravgupta873/Stock-Market-Prediction-using-LSTM" 
    target="_blank" 
    rel="noopener noreferrer"
    className="project-btn"
  >
    💻 View Source Code
  </a>
</div>
  
    </>
  );
}

export default Project6;