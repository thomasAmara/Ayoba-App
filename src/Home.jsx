import { Text, Box } from '@chakra-ui/react';
import React from 'react';
import Navbar from './components/Navbar';
import Accelerator from './components/Accelerator';
import App from './components/Ayobapp';
import Insight from './components/Insight';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <Accelerator />
      <Insight />
      <App />
      <Footer />
    </div>
  );
}
