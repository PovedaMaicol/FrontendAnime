import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'
import useFetch from '../hooks/useFetch';

const AnimeId = () => {

  const { id } = useParams(); // capturo el id del anime desde la url 
  const { data: animeId, fetchData, loading, error } = useFetch();    // Obtener la data del anime específico 

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
      {/* <img src={animeId.images.jpg.image_url} alt={animeId.title} /> */}
    </div>
  );
};

export default AnimeId;