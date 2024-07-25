// src/App.js
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import NavBar from './NavBar';
import Home from './Home';
import AddQuestion from './AddQuestion';
import ManageQuestions from './ManageQuestions';
import Footer from './Footer';

function App() {
  return (
    <div className="App">
      <NavBar />
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/add" element={<AddQuestion />} />
        <Route path="/manage" element={<ManageQuestions />} />
        <Route path="/manage-questions" element={<ManageQuestions />} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
