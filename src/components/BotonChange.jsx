import React, { useState } from 'react';
import { Button } from 'react-bootstrap';
import './styles/botonChange.css';

const BotonChange = ({ setShowPopular }) => {
  const [activeButton, setActiveButton] = useState('all'); // 'all' o 'popular'

  return (
    <div className="container_buttons">
      <Button
        onClick={() => {
          setShowPopular(false);
          setActiveButton('all');
        }}
        className={`btn1 custom-btn ${activeButton === 'all' ? 'active' : 'inactive'}`}
      >
        todos los animes
      </Button>

      <Button
        onClick={() => {
          setShowPopular(true);
          setActiveButton('popular');
        }}
        className={`btn2 custom-btn ${activeButton === 'popular' ? 'active' : 'inactive'}`}
      >
        Animes más vistos
      </Button>
    </div>
  );
};

export default BotonChange;
