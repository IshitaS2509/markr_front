import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AboutPage.css';

const AboutPage = () => {
  const [content, setContent] = useState('');

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await axios.get('http://localhost:5001/api/about');
        setContent(response.data.content);
      } catch (error) {
        console.error("Error fetching about content:", error);
      }
    };

    fetchContent();
  }, []);

  return (
    <div className="about-page-container">
      <h1>About Us</h1>
      <p>{content}</p>
    </div>
  );
};

export default AboutPage;
