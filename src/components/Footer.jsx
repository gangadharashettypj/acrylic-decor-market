
import React from 'react';
import { Box, Container, Grid, Typography, Link, Stack, Divider, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter, Pinterest } from '@mui/icons-material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: 'background.paper', pt: 6, pb: 3 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              LUMINA
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Modern lighting and decor crafted from acrylic and MDF.
            </Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
              <IconButton size="small" color="inherit">
                <Facebook />
              </IconButton>
              <IconButton size="small" color="inherit">
                <Instagram />
              </IconButton>
              <IconButton size="small" color="inherit">
                <Twitter />
              </IconButton>
              <IconButton size="small" color="inherit">
                <Pinterest />
              </IconButton>
            </Stack>
          </Grid>
          
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Shop
            </Typography>
            <Stack>
              <Link href="#" underline="hover" color="text.secondary">Lighting</Link>
              <Link href="#" underline="hover" color="text.secondary">Wall Decor</Link>
              <Link href="#" underline="hover" color="text.secondary">Table Decor</Link>
              <Link href="#" underline="hover" color="text.secondary">Sculptures</Link>
            </Stack>
          </Grid>
          
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Help
            </Typography>
            <Stack>
              <Link href="#" underline="hover" color="text.secondary">FAQ</Link>
              <Link href="#" underline="hover" color="text.secondary">Shipping</Link>
              <Link href="#" underline="hover" color="text.secondary">Returns</Link>
              <Link href="#" underline="hover" color="text.secondary">Contact</Link>
            </Stack>
          </Grid>
          
          <Grid item xs={6} sm={3} md={2}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              About
            </Typography>
            <Stack>
              <Link href="#" underline="hover" color="text.secondary">Our Story</Link>
              <Link href="#" underline="hover" color="text.secondary">Materials</Link>
              <Link href="#" underline="hover" color="text.secondary">Sustainability</Link>
              <Link href="#" underline="hover" color="text.secondary">Artisans</Link>
            </Stack>
          </Grid>
          
          <Grid item xs={6} sm={3} md={3}>
            <Typography variant="subtitle1" color="text.primary" gutterBottom>
              Contact
            </Typography>
            <Typography variant="body2" color="text.secondary">
              123 Design Street<br />
              Creative City, ST 12345<br />
              hello@lumina.com<br />
              (555) 123-4567
            </Typography>
          </Grid>
        </Grid>
        
        <Divider sx={{ mt: 6, mb: 3 }} />
        
        <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} Lumina. All rights reserved.
          </Typography>
          <Box sx={{ display: 'flex', gap: 2, mt: { xs: 2, sm: 0 } }}>
            <Link href="#" color="text.secondary" underline="hover" variant="body2">
              Privacy Policy
            </Link>
            <Link href="#" color="text.secondary" underline="hover" variant="body2">
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
