import React, { useState, Suspense, lazy } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';

const PropertyTypes = lazy(() => import('./components/PropertyTypes'));
const DreamProperties = lazy(() => import('./components/DreamProperties'));
const PopularLocations = lazy(() => import('./components/PopularLocations'));
const SmartOwnership = lazy(() => import('./components/SmartOwnership'));
const Partners = lazy(() => import('./components/Partners'));
const Footer = lazy(() => import('./components/Footer'));

import CustomCursor from './components/CustomCursor';
import Loader from './components/Loader';
import { AnimatePresence } from 'framer-motion';
import './App.css';

function App() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <CustomCursor />

      <AnimatePresence mode="wait">
        {loading && <Loader key="loader" setLoading={setLoading} />}
      </AnimatePresence>

      <Hero />
      <About />
      <Services />
      <Suspense fallback={<div style={{ minHeight: '100vh', backgroundColor: '#0f0f11' }}></div>}>
        <PropertyTypes />
        <DreamProperties />
        <PopularLocations />
        <SmartOwnership />
        <Partners />
        <Footer />
      </Suspense>
    </>
  );
}

export default App;
