import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

const AnimeId = () => {
  const { id } = useParams(); // Capturo el id del anime desde la URL
  const { data: animeId, fetchData, loading, error } = useFetch(); // Obtener la data del anime específico

  useEffect(() => {
    const url = `https://api.jikan.moe/v4/anime/${id}`;
    fetchData(url); // Llamar a la función fetchData con la URL específica
  }, [id]);

  if (loading) return <p>Cargando anime...</p>;
  if (error) return <p>Hubo un error al cargar el anime</p>;

  return (
    <div>
      <h1>{animeId.title}</h1>
      <p>{animeId.synopsis}</p>
      <p>{animeId.episodes} episodes</p>
      <p>{animeId.score} score</p>
      <p>{animeId.status}</p>
      <p>{animeId.rank} rank</p>
      <p>{animeId.members} members</p>
      <div>
        {animeId.genres.map((genre) => (
          <span key={genre.mal_id} style={{ marginRight: '10px' }}>
            {genre.name}
          </span>
        ))}
      </div>



      <img src={animeId.images.webp.large_image_url} alt={animeId.title} />
    </div>
  );
};

export default AnimeId;
