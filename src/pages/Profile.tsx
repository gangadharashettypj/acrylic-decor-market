
import React from 'react';
import { Box, Container, Typography, Button, Paper, Divider, Grid, Avatar } from '@mui/material';
import { Navigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useAuth } from '../contexts/AuthContext';

const Profile = () => {
  const { user, loading, signOut } = useAuth();

  const handleSignOut = async () => {
    await signOut();
  };

  if (loading) {
    return <Box sx={{ p: 4, textAlign: 'center' }}>Loading...</Box>;
  }

  if (!user) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <Box>
      <Navbar />
      <Container maxWidth="md" sx={{ py: 8 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          My Account
        </Typography>

        <Paper elevation={2} sx={{ p: 4, mt: 4 }}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={3} sx={{ display: 'flex', justifyContent: 'center' }}>
              <Avatar
                sx={{ width: 100, height: 100, bgcolor: 'primary.main' }}
              >
                {user.email?.charAt(0).toUpperCase()}
              </Avatar>
            </Grid>
            <Grid item xs={12} md={9}>
              <Typography variant="h5" gutterBottom>
                Account Information
              </Typography>
              <Typography variant="body1" sx={{ mb: 1 }}>
                <strong>Email:</strong> {user.email}
              </Typography>
              <Typography variant="body1" sx={{ mb: 3 }}>
                <strong>Member since:</strong> {new Date(user.created_at || '').toLocaleDateString()}
              </Typography>

              <Button
                variant="contained"
                color="primary"
                onClick={handleSignOut}
                sx={{ mt: 2 }}
              >
                Sign Out
              </Button>
            </Grid>
          </Grid>
        </Paper>

        <Paper elevation={2} sx={{ p: 4, mt: 4 }}>
          <Typography variant="h5" gutterBottom>
            Order History
          </Typography>
          <Divider sx={{ mb: 3 }} />
          <Typography variant="body1" color="text.secondary" align="center">
            You haven't placed any orders yet.
          </Typography>
        </Paper>
      </Container>
      <Footer />
    </Box>
  );
};

export default Profile;
