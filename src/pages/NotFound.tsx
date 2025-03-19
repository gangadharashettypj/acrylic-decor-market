
import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const NotFound = () => {
  return (
    <Box>
      <Navbar />
      <Container maxWidth="md">
        <Box 
          sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            alignItems: 'center', 
            justifyContent: 'center',
            minHeight: '70vh',
            textAlign: 'center',
            py: 8
          }}
        >
          <Typography variant="h1" component="h1" color="primary" sx={{ fontSize: { xs: '6rem', md: '8rem' }, fontWeight: 700 }}>
            404
          </Typography>
          <Typography variant="h4" component="p" gutterBottom>
            Page Not Found
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            The page you're looking for doesn't exist or has been moved.
          </Typography>
          <Button 
            component={Link} 
            to="/" 
            variant="contained" 
            color="primary" 
            size="large" 
            sx={{ mt: 2 }}
          >
            Back to Home
          </Button>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
};

export default NotFound;
