import './App.css';
import { theme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import Carousel from './carousel';
import Hero from './hero';
import Carrusel from './Hero2';
import ContactForm from './contacto';
import AboutUs from './Somos';
import Servicios from './servicios';
import Footer from './footer';
import Ubicanos from './ubicanos';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Carrusel/>
      <AboutUs/>
      <Servicios/>
      <ContactForm/>
      <Ubicanos/>
      <Footer/>
    </ThemeProvider>
  );
}

export default App;
