import './App.css';
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
const Home = lazy(() => import('./Home'));
const User = lazy(() => import('./Users'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/backend' element={<User />} />
      </Routes>{' '}
    </Suspense>
  );
}

export default App;
