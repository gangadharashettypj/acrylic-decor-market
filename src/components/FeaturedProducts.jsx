
import React from 'react';
import { Container, Typography, Grid, Box } from '@mui/material';
import ProductCard from './ProductCard';

// Sample product data (would normally come from an API)
const products = [
  {
    id: 1,
    name: 'Aurora Table Lamp',
    category: 'Lighting',
    price: 129.99,
    rating: 4.5,
    reviewCount: 24,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: 2,
    name: 'Geometric Wall Art',
    category: 'Wall Decor',
    price: 89.99,
    rating: 4.7,
    reviewCount: 18,
    image: 'https://images.unsplash.com/photo-1554295405-abb8fd54f153?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: 3,
    name: 'Prism Pendant Light',
    category: 'Lighting',
    price: 149.99,
    rating: 4.8,
    reviewCount: 32,
    image: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: 4,
    name: 'Minimalist Table Sculpture',
    category: 'Table Decor',
    price: 59.99,
    rating: 4.2,
    reviewCount: 15,
    image: 'https://images.unsplash.com/photo-1493244040629-496f6d136e28?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
  },
];

const FeaturedProducts = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Featured Products
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          Discover our most popular lighting and decor pieces
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {products.map((product) => (
            <Grid item key={product.id} xs={12} sm={6} md={3}>
              <ProductCard product={product} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default FeaturedProducts;
