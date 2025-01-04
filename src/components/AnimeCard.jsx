import React from "react";
import './styles/animeCard.css';


const AnimeCard = ({ anime }) => (
    <div>
        {anime ? (
            <img className='anime_img' src={anime.images.jpg.image_url} alt={anime.title} />
        ) : (
            <p>No se encontró el anime</p>
        )}
    </div>
);

export default AnimeCard;
