
import React from 'react';
import { Box, Container, Typography, Grid, Breadcrumbs, Link } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Sculptures = () => {
  // Sample product data for sculptures category
  const sculpturesProducts = [
    {
      id: 1,
      name: 'Abstract Acrylic Sculpture',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1581343109297-b0723610858c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Abstract',
      rating: 4.9,
      reviewCount: 48
    },
    {
      id: 2,
      name: 'Geometric Desk Sculpture',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1567225557594-88d73e55f2cb?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Desk Decor',
      rating: 4.7,
      reviewCount: 34
    },
    {
      id: 3,
      name: 'Layered MDF Art Piece',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1547826039-bfc35e0f1ea8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Art Piece',
      rating: 4.6,
      reviewCount: 29
    },
    {
      id: 4,
      name: 'Illuminated Acrylic Sculpture',
      price: 219.99,
      image: 'https://images.unsplash.com/photo-1570723835844-a6a64459e7f0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Illuminated',
      rating: 5.0,
      reviewCount: 56
    },
    {
      id: 5,
      name: 'Minimalist Animal Figure',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1518398046578-8cca57782e17?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Figure',
      rating: 4.5,
      reviewCount: 38
    },
    {
      id: 6,
      name: 'Decorative Tabletop Piece',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1579656592043-a20e25a4aa4b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Tabletop',
      rating: 4.8,
      reviewCount: 42
    },
  ];

  return (
    <Box>
      <Navbar />
      <Container maxWidth="xl" sx={{ py: 6 }}>
        <Breadcrumbs sx={{ mb: 4 }}>
          <Link underline="hover" color="inherit" href="/">
            Home
          </Link>
          <Typography color="text.primary">Sculptures</Typography>
        </Breadcrumbs>
        
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
          Sculptures Collection
        </Typography>
        
        <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 5, maxWidth: 800 }}>
          Discover our unique collection of acrylic and MDF sculptures that serve as striking focal points in any space. 
          Each piece is a testament to exceptional craftsmanship and creative design.
        </Typography>
        
        <Grid container spacing={4}>
          {sculpturesProducts.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={4}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
      <Footer />
    </Box>
  );
};

export default Sculptures;
