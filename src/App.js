import './App.css';
import { theme } from "./theme";
import { ThemeProvider } from "@emotion/react";

import Hero from './hero';
import Navbar from './navbar';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navbar/>
      <Hero/>
    </ThemeProvider>
  );
}

export default App;
