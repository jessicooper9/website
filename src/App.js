import './App.css';
import React from 'react';
import Navbar from "./Navigation/Navbar"
import Projects from "./components/Projects"
import HomePage from "./components/HomePage"
import AboutMe from "./components/AboutMe"
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/" element={<Projects />} />
            <Route path="/" element={<AboutMe />} />
          </Routes>
      </div>
    </>
  );
}

export default App;
