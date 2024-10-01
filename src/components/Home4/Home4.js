import React from 'react';
import './Home4.css'; // Import the CSS file
import demo from "../../../src/assets/demo.jpg";

const Home4 = () => {
  return (
    <div className="split-section">
      <div className="image-section">
        <img
          src={demo}
          alt="GPA Calculator Demo"
        />
      </div>
      <div className="text-box"> {/* Added text box wrapper */}
        <div className="text-section">
          <h2>GPA Calculator:</h2>
          <p>
            A GPA calculator is a valuable tool that enables students to easily compute their Grade Point Average by inputting their course grades and credit hours.
          </p>
          <p>
            It helps them track academic performance, set goals, and prepare for important milestones like college admissions and scholarships, ultimately empowering them to take charge of their educational journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home4;
