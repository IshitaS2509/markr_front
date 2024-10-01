import React from 'react';
import './Home3.css'; // Import the CSS file
import demo from "../../../src/assets/demo.jpg"

const Home3 = () => {
  return (
    <div className="split-section">
      <div className="text-box"> {/* Added text box wrapper */}
        <div className="text-section">
          <h2>Attendance Tracker:</h2>
          <p>
            Our attendance tracker feature empowers you to efficiently monitor your daily attendance, easily calculate totals, and seamlessly record attendance for events. 
          </p>
          <p>
            Additionally, it provides insights into your academic progress by indicating how many more classes you need to attend to meet your goals. With user-friendly tools and real-time updates, staying on top of your attendance has never been easier!
          </p>
        </div>
      </div>
      <div className="image-section">
        <img
          src={demo}
          alt="Attendance Tracker Demo"
        />
      </div>
    </div>
  );
};

export default Home3;
