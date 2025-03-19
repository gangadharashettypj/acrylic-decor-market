
import React from 'react';
import { Box, Container, Typography, Grid, Breadcrumbs, Link } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const Lighting = () => {
  // Sample product data for lighting category
  const lightingProducts = [
    {
      id: 1,
      name: 'Modern Acrylic Pendant Light',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Pendant',
      rating: 4.5,
      reviewCount: 24
    },
    {
      id: 2,
      name: 'Geometric LED Table Lamp',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Table Lamp',
      rating: 4.8,
      reviewCount: 36
    },
    {
      id: 3,
      name: 'Minimalist Floor Lamp',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Floor Lamp',
      rating: 4.3,
      reviewCount: 18
    },
    {
      id: 4,
      name: 'Artistic Wall Sconce',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1517991104123-1d56a6e81ed9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Wall Light',
      rating: 4.6,
      reviewCount: 42
    },
    {
      id: 5,
      name: 'Acrylic Chandelier',
      price: 299.99,
      image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Chandelier',
      rating: 4.9,
      reviewCount: 52
    },
    {
      id: 6,
      name: 'Colorful Night Light',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Night Light',
      rating: 4.2,
      reviewCount: 28
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
          <Typography color="text.primary">Lighting</Typography>
        </Breadcrumbs>
        
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
          Lighting Collection
        </Typography>
        
        <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 5, maxWidth: 800 }}>
          Illuminate your space with our exquisite collection of acrylic and MDF lighting fixtures. 
          From pendant lights to table lamps, our designs blend contemporary aesthetics with timeless elegance.
        </Typography>
        
        <Grid container spacing={4}>
          {lightingProducts.map((product) => (
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

export default Lighting;
