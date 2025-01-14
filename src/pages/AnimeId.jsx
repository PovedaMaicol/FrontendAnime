import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './styles/animeId.css';

const AnimeId = () => {
  const { id } = useParams(); // Capturo el id del anime desde la URL
  const { data: animeId, fetchData, loading, error } = useFetch(); // Obtener la data del anime específico

  useEffect(() => {
    const url = `https://api.jikan.moe/v4/anime/${id}`;
    fetchData(url); // Llamar a la función fetchData con la URL específica
    console.log('el anime es:', animeId); // Verificar que el anime se cargó correctamente  
  }, [id]);

  if (loading) return <p>Cargando anime...</p>;
  if (error) return <p>Hubo un error al cargar el anime</p>;

  // Verificar si animeId y las propiedades existen antes de renderizarlas
  if (!animeId || !animeId.genres) {
    return <p>No se pudo cargar la información del anime.</p>;
  }

  return (
    <div style={{ padding: '15px' }}>


      <section className="first-section">
        <img
          src={animeId.images?.webp?.large_image_url}
          alt={animeId.title}
          className="container-img"
        />

        <div className="first-section-info">
          <h2>{animeId.title}</h2>

          <div className="genres">
          <p>Generos:</p>
            {animeId.genres.map((genre) => (
              <span key={genre.mal_id} className="genre">
                {genre.name}
              </span>
            ))}
          </div>
          <br/>

          <table className="anime-info-table">
        <thead>
          <tr>
            <th>Atributo</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Episodios</td>
            <td>{animeId.episodes}</td>
          </tr>
          <tr>
            <td>Puntaje</td>
            <td>{animeId.score}</td>
          </tr>
          <tr>
            <td>Rango</td>
            <td>{animeId.rank}</td>
          </tr>
          <tr>
            <td>Miembros</td>
            <td>{animeId.members}</td>
          </tr>
          <tr>
            <td>Estado</td>
            <td>{animeId.status}</td>
          </tr>
        </tbody>
          </table>

        </div>
      </section>
<br/>
      <p>{animeId.synopsis}</p>

      
    </div>
  );
};

export default AnimeId;
