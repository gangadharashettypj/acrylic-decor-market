
import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import About from '../components/About';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

const Index = () => {
  return (
    <Box>
      <Navbar />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <About />
      <Newsletter />
      <Footer />
    </Box>
  );
};

export default Index;
