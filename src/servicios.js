import React from 'react';
import { Container, Grid, Card, CardMedia, CardContent, Typography, Button } from '@mui/material';

const serviciosData = [
  {
    title: 'Capacitaciones Grupales',
    image: 'https://blog.adecco.com.mx/wp-content/uploads/2019/06/trabajo-equipo-capacitacion-empresas-1.png',
    description: 'Únete a nuestras capacitaciones grupales y forma parte de una comunidad comprometida en aprender, crecer y prosperar en el emocionante mundo de las inversiones. ',
  },
  {
    title: 'Reunión Online',
    image: 'https://arteyanimacion.com/wp-content/uploads/2020/03/19-videoconferencia.jpg',
    description: 'A través de presentaciones dinámicas, debates estimulantes y ejercicios prácticos en tiempo real, te proporcionaremos las herramientas esenciales para tomar decisiones informadas y confiadas en tus inversiones.'
  },
  {
    title: 'Consultoria ',
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3IWdJgurWu22bIzkD8tq5-96nQ7LRiM9lwA&usqp=CAU',
    description: 'En nuestra plataforma de inversiones, te brindamos un servicio de consultoría personalizada para ayudarte a alcanzar tus objetivos financieros. ',
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
