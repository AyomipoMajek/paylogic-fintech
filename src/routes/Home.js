import React from 'react';
import Navbar from '../components/Navbar';
import Homepage from '../components/Homepage';
import Aboutpage from '../components/Aboutpage';
import Servicespage from '../components/Servicespage';
import Pricingpage from '../components/Pricingpage';
import Blogpage from '../components/Blogpage';

const Home = () => (
  <div>
    <Navbar />
    <Homepage />
    <Aboutpage />
    <Servicespage />
    <Pricingpage />
    <Blogpage />
  </div>
);

export default Home;
