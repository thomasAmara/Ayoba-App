import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';

function App() {
  return (
    <Routes>
      <Route path='/home' element={<Home />} />
    </Routes>
  );
}

export default App;
