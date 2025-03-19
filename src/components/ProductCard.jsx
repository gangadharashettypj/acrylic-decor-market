
import React, { useState } from 'react';
import { 
  Card, 
  CardMedia, 
  CardContent, 
  Typography, 
  CardActions, 
  Button, 
  Rating, 
  Box,
  Snackbar,
  Alert
} from '@mui/material';
import { supabase, addToCart } from '../integrations/supabase/client';
import { useAuth } from '../contexts/AuthContext';

const ProductCard = ({ product }) => {
  const { user } = useAuth();
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState({ open: false, message: '', severity: 'success' });

  const handleAddToCart = async () => {
    if (!user) {
      setNotification({
        open: true,
        message: 'Please sign in to add items to your cart',
        severity: 'warning'
      });
      return;
    }

    setLoading(true);
    try {
      const { error } = await addToCart(user.id, product.id);
      
      if (error) throw error;
      
      setNotification({
        open: true,
        message: 'Product added to cart successfully!',
        severity: 'success'
      });
    } catch (error) {
      console.error('Error adding to cart:', error);
      setNotification({
        open: true,
        message: 'Failed to add product to cart',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCloseNotification = () => {
    setNotification(prev => ({ ...prev, open: false }));
  };

  return (
    <Card sx={{ maxWidth: 345, height: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        height="200"
        image={product.image}
        alt={product.name}
        sx={{ objectFit: 'cover' }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {product.category}
        </Typography>
        <Typography variant="h6" component="div" gutterBottom noWrap>
          {product.name}
        </Typography>
        <Box display="flex" alignItems="center" mb={1}>
          <Rating value={product.rating} readOnly size="small" precision={0.5} />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({product.reviewCount})
          </Typography>
        </Box>
        <Typography variant="h6" color="primary">
          ${product.price.toFixed(2)}
        </Typography>
      </CardContent>
      <CardActions>
        <Button 
          size="small" 
          variant="outlined" 
          fullWidth
          disabled={loading}
          onClick={handleAddToCart}
        >
          {loading ? 'Adding...' : 'Add to Cart'}
        </Button>
      </CardActions>
      <Snackbar 
        open={notification.open} 
        autoHideDuration={6000} 
        onClose={handleCloseNotification}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleCloseNotification} 
          severity={notification.severity} 
          sx={{ width: '100%' }}
        >
          {notification.message}
        </Alert>
      </Snackbar>
    </Card>
  );
};

export default ProductCard;
