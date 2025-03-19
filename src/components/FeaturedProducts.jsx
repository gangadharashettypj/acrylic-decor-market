
import React, { useState, useEffect } from 'react';
import { Container, Typography, Grid, Box, CircularProgress } from '@mui/material';
import ProductCard from './ProductCard';
import { getProducts } from '../integrations/supabase/client';

const FeaturedProducts = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Fetch a limited set of products for the featured section
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .order('rating', { ascending: false })
          .limit(4);
        
        if (error) {
          throw error;
        }
        
        setProducts(data || []);
      } catch (err) {
        console.error('Error fetching featured products:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Featured Products
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          Discover our most popular lighting and decor pieces
        </Typography>
        
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 4 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" align="center" sx={{ py: 4 }}>
            Error loading products: {error}
          </Typography>
        ) : products.length === 0 ? (
          <Typography align="center" sx={{ py: 4 }}>
            No featured products available.
          </Typography>
        ) : (
          <Grid container spacing={4} sx={{ mt: 2 }}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={3}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default FeaturedProducts;
