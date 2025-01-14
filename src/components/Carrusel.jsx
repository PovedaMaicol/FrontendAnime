import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';

const Carrusel = ({ animes }) => {
  const [randomAnimes, setRandomAnimes] = useState([]);

  // Función para obtener animes únicos aleatorios
  const getRandomAnime = (animes, count) => {
    const selectedAnimes = new Set();
    while (selectedAnimes.size < count) {
      const randomIndex = Math.floor(Math.random() * animes.length);
      selectedAnimes.add(randomIndex);
    }
    return Array.from(selectedAnimes).map(index => animes[index]);
  };

  useEffect(() => {
    if (animes.length > 0) {
      const selectedAnimes = getRandomAnime(animes, 3);
      setRandomAnimes(selectedAnimes);
    }
  }, [animes]);

  return (
    <Carousel style={{height: '100px'}}>
      {randomAnimes.map((anime, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100"
            src={anime?.images?.jpg?.image_url}
            alt={anime?.title || "Imagen"}
          />
          <Carousel.Caption>
            <h3>{anime?.title || "Sin título"}</h3>
            <p>{anime?.synopsis || "Descripción no disponible."}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default Carrusel;
