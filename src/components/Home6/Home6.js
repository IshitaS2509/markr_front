import React from 'react';
import './Home6.css'; // Import the CSS file
import demo from "../../../src/assets/demo.jpg"

const Home6 = () => {
  return (
    <div className="split-section">
      <div className="image-section">
        <img
          src={demo}
          alt="Placeholder"
        />
      </div>
      <div className="text-box"> {/* Added text box wrapper */}
      <div className="text-section">
        <h2>Notes Maintainer:</h2>
        <p>
        A notes maintainer is a practical tool that allows students to organize and manage their lecture notes efficiently.
        </p>
        <p>
        By providing a structured platform for storing and retrieving information, it enhances study effectiveness and ensures easy access to important academic materials.
        </p>
      </div>
      </div>
    </div>
  );
};

export default Home6;
