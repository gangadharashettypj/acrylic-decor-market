
import React from 'react';
import { 
  Container, 
  Typography, 
  Grid, 
  Card, 
  CardMedia, 
  CardContent, 
  Box, 
  Button 
} from '@mui/material';

const categories = [
  {
    id: 1,
    name: 'Lighting',
    image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    description: 'Table lamps, pendants, and wall lights',
  },
  {
    id: 2,
    name: 'Wall Decor',
    image: 'https://images.unsplash.com/photo-1493244040629-496f6d136e28?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    description: 'Sculptures, art pieces, and wall hangings',
  },
  {
    id: 3,
    name: 'Table Decor',
    image: 'https://images.unsplash.com/photo-1504803542726-8b7229fc23c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    description: 'Centerpieces, tabletop accents, and vases',
  },
  {
    id: 4,
    name: 'Sculptures',
    image: 'https://images.unsplash.com/photo-1552849397-7aafe1e9578a?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80',
    description: 'Freestanding decorative art pieces',
  },
];

const Categories = () => {
  return (
    <Box sx={{ py: 8, bgcolor: 'background.paper' }}>
      <Container maxWidth="lg">
        <Typography variant="h3" component="h2" align="center" gutterBottom>
          Shop by Category
        </Typography>
        <Typography variant="subtitle1" align="center" color="text.secondary" paragraph>
          Browse our unique collections of handcrafted pieces
        </Typography>
        
        <Grid container spacing={4} sx={{ mt: 2 }}>
          {categories.map((category) => (
            <Grid item key={category.id} xs={12} sm={6} md={3}>
              <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <CardMedia
                  component="img"
                  height="200"
                  image={category.image}
                  alt={category.name}
                  sx={{ objectFit: 'cover' }}
                />
                <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
                  <Typography gutterBottom variant="h5" component="h3">
                    {category.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {category.description}
                  </Typography>
                  <Button variant="text" color="primary" sx={{ mt: 2 }}>
                    Shop Now
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Categories;
