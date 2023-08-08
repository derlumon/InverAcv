import React, { useState } from 'react';
import './Carousel.css'; // Importa el archivo CSS para el estilo del carrusel

const images = [
  './imagen1.png',
  './imagen2.jpg',
  './imagen1.png',
  // Agrega aquí más rutas de imágenes si es necesario
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const goToNextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const goToPrevSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="carousel">
      <div className="slides-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`slide ${index === activeIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      <button className="prev-button" onClick={goToPrevSlide}>
        &#10094;
      </button>
      <button className="next-button" onClick={goToNextSlide}>
        &#10095;
      </button>
    </div>
  );
};

export default Carousel;