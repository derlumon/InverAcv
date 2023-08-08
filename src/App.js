import './App.css';
import { theme } from "./theme";
import { ThemeProvider } from "@emotion/react";
import Carousel from './carousel';
import Hero from './hero';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Hero/>
    </ThemeProvider>
  );
}

export default App;
