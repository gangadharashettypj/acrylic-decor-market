
import React from 'react';
import { Box, Container, Typography, Grid, Breadcrumbs, Link } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const WallDecor = () => {
  // Sample product data for wall decor category
  const wallDecorProducts = [
    {
      id: 1,
      name: 'Geometric Wall Art Panels',
      price: 129.99,
      image: 'https://images.unsplash.com/photo-1596162954151-cdcb4c0f70a8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Wall Art',
      rating: 4.7,
      reviewCount: 38
    },
    {
      id: 2,
      name: 'Acrylic Floating Shelf',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1532372320572-cda25653a694?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Shelf',
      rating: 4.4,
      reviewCount: 26
    },
    {
      id: 3,
      name: 'LED Backlit Wall Panel',
      price: 179.99,
      image: 'https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'LED Panel',
      rating: 4.8,
      reviewCount: 43
    },
    {
      id: 4,
      name: 'Decorative Mirror Set',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Mirror',
      rating: 4.6,
      reviewCount: 31
    },
    {
      id: 5,
      name: 'Abstract Wall Sculpture',
      price: 189.99,
      image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Sculpture',
      rating: 4.9,
      reviewCount: 47
    },
    {
      id: 6,
      name: 'Modular Wall Panels',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1594125674956-61a9b49c8ecc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Wall Panel',
      rating: 4.5,
      reviewCount: 32
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
          <Typography color="text.primary">Wall Decor</Typography>
        </Breadcrumbs>
        
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
          Wall Decor Collection
        </Typography>
        
        <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 5, maxWidth: 800 }}>
          Transform your walls with our stunning collection of acrylic and MDF wall decor. 
          From geometric art panels to decorative shelves, our designs add character and style to any space.
        </Typography>
        
        <Grid container spacing={4}>
          {wallDecorProducts.map((product) => (
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

export default WallDecor;
