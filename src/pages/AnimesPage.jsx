import React, { useEffect, useState } from 'react';
import './styles/animesPage.css';
import useFetch from '../hooks/useFetch';
import AnimeCard from '../components/AnimeCard';
import { Link } from 'react-router-dom';
import SearchBar from '../components/SearchBar';

const AnimesPage = () => {
  // Hook para manejar la petición al servidor
  const { data: animes, fetchData, loading, error } = useFetch();

  // Estado para manejar la búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Función para manejar el evento de búsqueda
  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Buscando:", searchTerm);
  };

  // Obtener animes al cargar el componente
  useEffect(() => {
    const url = `https://api.jikan.moe/v4/anime`;
    fetchData(url);
  }, []);

  if (loading) return <p>Cargando animes...</p>;
  if (error) return <p>Hubo un error al cargar los animes</p>;

  // Filtrar animes según el término de búsqueda
  const filteredAnimes = searchTerm
    ? animes.filter((anime) =>
        anime.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : animes;

  return (
    <div>
      {/* Barra de búsqueda */}
      <SearchBar 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm} 
        handleSearch={handleSearch} 
      />

      <div className="container-cards">
        {/* Mostrar mensaje si no hay resultados */}
        {filteredAnimes.length === 0 ? (
          <p>No se encontraron resultados para: <strong>{searchTerm}</strong></p>
        ) : (
          filteredAnimes.map((anime) => (
            <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
              <AnimeCard anime={anime} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default AnimesPage;
