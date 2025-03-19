
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Breadcrumbs, Link, CircularProgress } from '@mui/material';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { getProducts } from '../integrations/supabase/client';

const Sculptures = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await getProducts('Sculptures');
        
        if (error) {
          throw error;
        }
        
        setProducts(data || []);
      } catch (err) {
        console.error('Error fetching sculptures:', err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

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
        
        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress />
          </Box>
        ) : error ? (
          <Typography color="error" align="center" sx={{ py: 4 }}>
            Error loading products: {error}
          </Typography>
        ) : products.length === 0 ? (
          <Typography align="center" sx={{ py: 4 }}>
            No products found in this category.
          </Typography>
        ) : (
          <Grid container spacing={4}>
            {products.map((product) => (
              <Grid item key={product.id} xs={12} sm={6} md={4}>
                <ProductCard product={product} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
      <Footer />
    </Box>
  );
};

export default Sculptures;
