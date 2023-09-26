import './App.css'
import '../index.css'
import Navbar from './components/Navbar'
import pic from './img/IMG_0617.jpg'
import AguaClara from './img/AguaClaraLogo.webp'
import CirrusData from './img/CirrusDataLogo.png'
import Research from './img/ResearchLogo.png'
import React, {useState, useEffect} from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Tutoring from './Tutoring';
import Landing from './Landing';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/Tutoring" element={<Tutoring />} />
      </Routes>
    </Router>

    
    </>
  )
}

export default App
