import React from 'react'
import Navbar from './components/Navbar/Navbar'
import { BrowserRouter, BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home2 from './components/Home2/Home2';
import Home1 from './components/Home1/Home1';
import Home3 from './components/Home3/Home3';
import Home4 from './components/Home4/Home4';
import Footer from './components/Footer/Footer';
import Home5 from './components/Home5/Home5';
import Home6 from './components/Home6/Home6';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
      <Route path="/" element={
            <>
              <br/>
              <Home1/>
              <Home2/>
              <Home3/>
              <br/>
              <Home4/>
              <br/>
              <Home5/>
              <br/>
              <Home6/>
              <br/>
            </>
          } />
      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App
