import React, { useState, useEffect } from 'react';
import './Carousel.css';

const images = [
  'https://cdn.pixabay.com/photo/2017/08/30/07/56/money-2696228_640.jpg',
  'https://media.istockphoto.com/id/1397011551/es/foto/pila-de-monedas-de-plata-con-gr%C3%A1fico-comercial-en-conceptos-financieros-y-crecimiento-de.webp?b=1&s=612x612&w=0&k=20&c=XCTb80l85y3YHa0-9_GpTlfCkCwmJgeBRWqGuuWIBD8=',
  'https://media.istockphoto.com/id/1465618017/es/foto/los-empresarios-inversores-piensan-antes-de-comprar-inversi%C3%B3n-en-el-mercado-de-valores.jpg?s=612x612&w=0&k=20&c=5byGjvUO5sqqlGEHfOUEZJz9IHgw2zyg6C7cg3gv10o=',
];

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel" style={{ transform: `translateX(-${activeIndex * 100}%)` }}>
        {images.map((imageUrl, index) => (
          <div
            key={index}
            className="slide"
            style={{ backgroundImage: `url(${imageUrl})` }}
          ></div>
        ))}
      </div>
      <div className="dots">
        {images.map((_, index) => (
          <span
            key={index}
            className={`dot ${index === activeIndex ? 'active-dot' : ''}`}
            onClick={() => setActiveIndex(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
