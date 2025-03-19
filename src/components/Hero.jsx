
import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';

const Hero = () => {
  return (
    <Box 
      sx={{ 
        bgcolor: 'background.paper', 
        pt: 8, 
        pb: 6,
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.85)), url(https://images.unsplash.com/photo-1616046229478-9901c5536a45?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography
              component="h1"
              variant="h2"
              color="text.primary"
              gutterBottom
              sx={{ fontWeight: 700, lineHeight: 1.2 }}
            >
              Modern Lighting & Decor in Acrylic & MDF
            </Typography>
            <Typography variant="h5" color="text.secondary" paragraph>
              Elevate your space with our handcrafted lighting and decor pieces. 
              Each design brings together the sleek transparency of acrylic and 
              the warm texture of MDF to create truly unique statement pieces.
            </Typography>
            <Box sx={{ mt: 4 }}>
              <Button variant="contained" color="primary" size="large" sx={{ mr: 2 }}>
                Shop Collection
              </Button>
              <Button variant="outlined" color="primary" size="large">
                Learn More
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box 
              component="img"
              src="https://images.unsplash.com/photo-1540932239986-30128078f3c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80"
              alt="Modern lamp"
              sx={{ 
                width: '100%', 
                borderRadius: 2,
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
                maxHeight: 500,
                objectFit: 'cover'
              }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
