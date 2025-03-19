
import React from 'react';
import { Box, Container, Typography, Grid, Paper } from '@mui/material';

const About = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.default' }}>
      <Container maxWidth="lg">
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box 
              component="img" 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
              alt="Workshop"
              sx={{ 
                width: '100%', 
                borderRadius: 2,
                boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
              }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h3" component="h2" gutterBottom>
              Crafted with Care
            </Typography>
            <Typography variant="body1" paragraph>
              At Lumina, we blend the sleek transparency of acrylic and the warm texture 
              of MDF to create lighting and decor pieces that are truly unique. Our passion 
              lies in creating products that not only illuminate spaces but also serve as 
              conversation starters.
            </Typography>
            <Typography variant="body1" paragraph>
              Each piece is meticulously designed and crafted in our studio, ensuring 
              the highest quality and attention to detail. We believe in sustainable 
              practices and source our materials responsibly.
            </Typography>
            
            <Grid container spacing={2} sx={{ mt: 4 }}>
              <Grid item xs={6}>
                <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.paper', textAlign: 'center' }}>
                  <Typography variant="h4" gutterBottom>500+</Typography>
                  <Typography variant="body2" color="text.secondary">Unique Products</Typography>
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper elevation={0} sx={{ p: 3, bgcolor: 'background.paper', textAlign: 'center' }}>
                  <Typography variant="h4" gutterBottom>50+</Typography>
                  <Typography variant="body2" color="text.secondary">Artisans</Typography>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
