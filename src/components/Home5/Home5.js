import React from 'react';
import './Home5.css'; // Import the CSS file
import demo from "../../../src/assets/demo.jpg"

const Home5 = () => {
  return (
    <div className="split-section">
        <div className="text-box"> {/* Added text box wrapper */}
      <div className="text-section">
        <h2>Rank Predictor:</h2>
        <p>
        A rank predictor is a powerful tool that estimates a student's academic ranking based on their grades and performance metrics.
        </p>
        <p>
        By providing insights into how they compare with peers, it helps students set realistic goals and stay motivated in their academic pursuits.
        </p>
      </div>
      </div>
      <div className="image-section">
        <img
          src={demo}
          alt="Placeholder"
        />
      </div>
    </div>
  );
};

export default Home5;
