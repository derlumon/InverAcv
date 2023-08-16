import './App.css';
import { theme } from "./theme";
import { ThemeProvider } from "@emotion/react";

import Hero from './hero';
import Navbar from './navbar';

import Carrusel from './Hero2';
import ContactForm from './contacto';
import AboutUs from './Somos';
import Servicios from './servicios';
import Footer from './footer';
import Ubicanos from './ubicanos';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Hero/>
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
