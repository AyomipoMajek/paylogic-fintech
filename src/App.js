import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home';
import About from './routes/About';
import Services from './routes/Services';
import Pricing from './routes/Pricing';
import Blog from './routes/Blog';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="services" element={<Services />} />
        <Route path="pricing" element={<Pricing />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
