import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const serviciosData = [
  {
    title: 'Servicio 1',
    image: 'https://via.placeholder.com/200x160',
    description: 'Descripción del Servicio 1.',
  },
  {
    title: 'Servicio 2',
    image: 'https://via.placeholder.com/200x160',
    description: 'Descripción del Servicio 2.',
  },
  {
    title: 'Servicio 3',
    image: 'https://via.placeholder.com/200x160',
    description: 'Descripción del Servicio 3.',
  },

];

const cardStyle = {
  backgroundColor: '#333',
  color: '#fff',
  borderRadius: 8,
};

const cardMediaStyle = {
  height: 250,
};

const cardContentStyle = {
  textAlign: 'center',
};

const contactButtonStyle = {
  marginTop: 8,
  color: '#83072D',
};

export default function Servicios() {
  return (
    <div style={{ backgroundColor: '#000', color: '#fff', padding: 10, minHeight: '50vh' }}>
      <Container maxWidth="md">
        <Typography variant="h4" style={{ marginBottom: 16, textAlign: 'center' }}>
          Servicios
        </Typography>
        <Grid container spacing={10}>
          {serviciosData.map((servicio, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card style={cardStyle}>
                <CardMedia style={cardMediaStyle} image={servicio.image} />
                <CardContent style={cardContentStyle}>
                  <Typography variant="h6">{servicio.title}</Typography>
                  <Typography>{servicio.description}</Typography>
                  <Button variant="contained" color="primary" style={contactButtonStyle}>
                    Contáctanos
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
