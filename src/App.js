import './App.css';
import React, { Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react';
const Home = lazy(() => import('./Home'));
const User = lazy(() => import('./Users'));
const Reg = lazy(() => import('./components/SuccessMessage'));

function App() {
  return (
    <Suspense
      fallback={
        <div
          style={{
            display: 'flex',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Spinner
            thickness='8px'
            speed='0.65s'
            emptyColor='gray.200'
            color='blue.500'
            size='xl'
          />
        </div>
      }
    >
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/backend' element={<User />} />
        <Route path='/successMsg' element={<Reg />} />
      </Routes>{' '}
    </Suspense>
  );
}

export default App;
