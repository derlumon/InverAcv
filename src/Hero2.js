import { Button } from "@mui/material";
import React, { useState } from "react";
import a4 from "./a4.png";
import fondo from "./img/6234411.jpg";
import Carousel from "./carousel";
import "./hero2.css"; // Import the CSS file

export default function Carrusel() {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const boxShadow = isHovered
    ? "0px 8px 12px rgba(218, 165, 32, 0.8)"
    : "0px 4px 6px rgba(218, 165, 32, 0.5)";

  return (
    <div className="carrusel-container" style={{ backgroundImage: `url(${fondo})` }}>
      <img
        src={a4}
        alt="a4"
        className="carrusel-image"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{ boxShadow: boxShadow, transition: "box-shadow 0.3s ease-in-out" }}
      />
      <Carousel />
      <Button variant="outlined" className="carrusel-button">
        Contact
      </Button>
    </div>
  );
}
