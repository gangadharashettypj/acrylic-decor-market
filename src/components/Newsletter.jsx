
import React from 'react';
import { Box, Container, Typography, TextField, Button, Paper, Grid } from '@mui/material';

const Newsletter = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'primary.main' }}>
      <Container maxWidth="md">
        <Paper elevation={0} sx={{ p: 4, bgcolor: 'background.paper', borderRadius: 2 }}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <Typography variant="h4" component="h2" gutterBottom>
                Join Our Newsletter
              </Typography>
              <Typography variant="body1" paragraph color="text.secondary">
                Subscribe to receive updates on new collections, special offers, and design inspiration.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box component="form" sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' } }}>
                <TextField
                  fullWidth
                  placeholder="Your email address"
                  variant="outlined"
                  size="medium"
                  sx={{ 
                    mr: { sm: 1 }, 
                    mb: { xs: 2, sm: 0 },
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '4px 0 0 4px'
                    }
                  }}
                />
                <Button 
                  variant="contained" 
                  color="primary" 
                  size="large"
                  sx={{
                    whiteSpace: 'nowrap',
                    minWidth: { sm: '120px' }
                  }}
                >
                  Subscribe
                </Button>
              </Box>
              <Typography variant="caption" color="text.secondary" sx={{ mt: 1, display: 'block' }}>
                By subscribing, you agree to our Privacy Policy. We respect your privacy.
              </Typography>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
};

export default Newsletter;
