import './App.css'
import '../index.css'
import React from 'react'
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
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
