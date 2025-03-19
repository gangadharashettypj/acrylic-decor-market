
import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AuthForms from '../components/AuthForms';
import { useAuth } from '../contexts/AuthContext';

const Auth = () => {
  const { user, loading } = useAuth();

  // Redirect if user is already logged in
  if (loading) {
    return <Box sx={{ p: 4, textAlign: 'center' }}>Loading...</Box>;
  }

  if (user) {
    return <Navigate to="/" replace />;
  }

  return (
    <Box>
      <Navbar />
      <Container maxWidth="sm" sx={{ py: 8 }}>
        <Typography variant="h4" component="h1" align="center" gutterBottom>
          Account Access
        </Typography>
        <Typography variant="body1" align="center" color="text.secondary" paragraph>
          Sign in to your account or create a new one to start shopping.
        </Typography>
        <AuthForms />
      </Container>
      <Footer />
    </Box>
  );
};

export default Auth;
