import React from 'react';
import { Container, Grid, Typography, Link } from '@mui/material';
import logo from './img/logosinletras.png'
export default function Footer() {

  const footerStyle = {
    backgroundColor: '#000',
    color: '#D3D3D3',
    bottom: 0,
    left: 0,
    width: '100%',
  };
  return (
    <footer style={footerStyle}>
      <Container sx={{ py: 4 }}>
        <Grid container justifyContent="center" alignItems="center" borderBottom={1} sx={{ pb: 4 }}>
          <Grid item xs={12} lg={6} textAlign="center" sx={{ mb: { xs: 2, lg: 0 } }}>
          <img src={logo} alt="Logo" style={{ width: '100%', maxWidth: '100px' }} />
          </Grid>
    
        </Grid>

        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h6" sx={{ mb: 2 }}>
             InverActiv
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Typography variant="h6" component="h6" sx={{ mb: 2 }}>
           Servicios
            </Typography>
            <Typography variant="body2" color="inherit">
              <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Sobre nosotros
              </Link>
              <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
             Contactanos
              </Link>
            
            </Typography>
          </Grid>
          <Grid item xs={6} sm={6} md={3}>
            <Typography variant="h6" component="h6" sx={{ mb: 2 }}>
            Links
            </Typography>
            <Typography variant="body2" color="inherit">
              <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Home
              </Link>
              <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
             Nuestra mision
              </Link>
              <Link href="#" color="inherit" sx={{ display: 'block', mb: 1 }}>
              Ubicanos
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" component="h6" sx={{ mb: 2 }}>
           
            </Typography>
            <Typography variant="body2" color="inherit">
              <Typography component="span" variant="body2" color="inherit" sx={{ display: 'block' }}>
              Av. de Las Fuentes 41a piso 12, Lomas de Tecamachalco, Naucalpan de Juárez. EDOMEX. CP. 53950
              </Typography>
              <Typography component="span" variant="body2" color="inherit" sx={{ display: 'block' }}>
                contacto@yt-global-brokers.com
              </Typography>
              <Typography component="span" variant="body2" color="inherit" sx={{ display: 'block' }}>
             
              </Typography>
              <Typography component="span" variant="body2" color="inherit" sx={{ display: 'block' }}>
             
              </Typography>
            </Typography>
          </Grid>
        </Grid>

        <Grid container justifyContent="center" sx={{ pt: 4 }}>
          <Typography variant="body2" color="inherit">
            © {new Date().getFullYear()}{' '}
            <Link href="https://mdbootstrap.com/" color="inherit" sx={{ fontWeight: 'bold' }}>
           InverActiv
            </Link>
          </Typography>
        </Grid>
      </Container>
    </footer>
  );
}