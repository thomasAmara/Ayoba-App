import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import User from './Users';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/backend' element={<User />} />
    </Routes>
  );
}

export default App;
