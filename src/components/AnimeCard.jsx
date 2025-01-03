import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";



const AnimeCard = ({ animeId }) => {
    const { data: anime, fetchData, loading,  error } = useFetch();

    useEffect(() => { 
        if(animeId) {
            fetchData(`https://api.jikan.moe/v4/anime/${animeId}`);
        }
      }, [animeId, fetchData]);

      if (loading) return <p>Cargando anime...</p>;
      if (error) return <p>Hubo un error al cargar el anime</p>;


  return (
    <div>
        {anime ? (
            <div>
                <h1>{anime.title}</h1>
                <img src={anime.images.jpg.image_url} alt={anime.title} />
                <p>{anime.synopsis}</p>
            </div>
        )
    :
    (
        <p>No se encontro el anime</p>
    )}
    </div>
    
  )
}

export default AnimeCard;