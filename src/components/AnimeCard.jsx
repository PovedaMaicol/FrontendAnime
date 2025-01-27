/* eslint-disable */

import React from "react";
import './styles/animeCard.css';


const AnimeCard = ({ anime }) => (
    <div>
        {anime ? (
            <div className="cont_card">

    {
    anime.status.includes('Finished') ? 
    (<p className="card_status finished">Finished</p>) : (<p className="card_status broadcast">in broadcast</p>)
    }
    
    {
    anime.episodes&& (<p className="card_episodes">Ep {anime.episodes}</p>)
    }

    
          
            <img className='anime_img' src={anime.images.jpg.image_url} alt={anime.title} />
            <p className="card_title">{anime.title}</p>
            </div>
        ) : (
            <p>No se encontró el anime</p>
        )}
    </div>
);

export default AnimeCard;
