import React from 'react';
import './Home1.css';

const Home1 = () => {
  const imageUrl =
  "https://wallpapercave.com/wp/wp10520581.jpg";

  return (
    <div className="home1" style={{ backgroundImage: `url(${imageUrl})` }}>
      <h1>Welcome to Markr</h1>
      <h3>"Stay organized, stay ahead—your all-in-one academic assistant."</h3>
    </div>
  );
};

export default Home1;
