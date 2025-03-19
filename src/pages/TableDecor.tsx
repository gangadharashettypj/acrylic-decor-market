
import React from 'react';
import { Box, Container, Typography, Grid, Breadcrumbs, Link } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';

const TableDecor = () => {
  // Sample product data for table decor category
  const tableDecorProducts = [
    {
      id: 1,
      name: 'Acrylic Vase Set',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Vase',
      rating: 4.8,
      reviewCount: 36
    },
    {
      id: 2,
      name: 'Modern Candle Holders',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1603204077167-2fa0196f0434?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Candle Holder',
      rating: 4.5,
      reviewCount: 28
    },
    {
      id: 3,
      name: 'Decorative Bowl',
      price: 59.99,
      image: 'https://images.unsplash.com/photo-1578500339562-c1fdc19eac8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Bowl',
      rating: 4.4,
      reviewCount: 22
    },
    {
      id: 4,
      name: 'Acrylic Display Boxes',
      price: 69.99,
      image: 'https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Display',
      rating: 4.7,
      reviewCount: 34
    },
    {
      id: 5,
      name: 'Table Centerpiece',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1532928448350-3c57da751677?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Centerpiece',
      rating: 4.9,
      reviewCount: 42
    },
    {
      id: 6,
      name: 'MDF Coasters Set',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1564934304050-e9bb87a26204?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
      category: 'Coasters',
      rating: 4.3,
      reviewCount: 25
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
          <Typography color="text.primary">Table Decor</Typography>
        </Breadcrumbs>
        
        <Typography variant="h3" component="h1" gutterBottom sx={{ fontWeight: 600, mb: 4 }}>
          Table Decor Collection
        </Typography>
        
        <Typography variant="body1" color="text.secondary" paragraph sx={{ mb: 5, maxWidth: 800 }}>
          Elevate your tabletops with our elegant collection of acrylic and MDF table decor. 
          From vases to candle holders, our pieces combine functionality with sophisticated design.
        </Typography>
        
        <Grid container spacing={4}>
          {tableDecorProducts.map((product) => (
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

export default TableDecor;
