import React, { useEffect, useState } from "react";
import "./styles/animesPage.css";
import useFetch from "../hooks/useFetch";
import AnimeCard from "../components/AnimeCard";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import BotonChange from "../components/BotonChange";
// import env from "react-dotenv";

const AnimesPage = ({ openSearch, setOpenSearch }) => {
  // Hook para manejar la petición al servidor
  const { data: animes, fetchData, loading, error } = useFetch();

  // Estado para manejar la búsqueda
  const [searchTerm, setSearchTerm] = useState("");

  // Estado para manejar si se muestran populares o no
  const [showPopular, setShowPopular] = useState(false);

  // Obtener animes al cargar el componente
  useEffect(() => {
    const url = import.meta.env.VITE_API_URL;
    // const url = 'https://api.jikan.moe/v4/anime'
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

  // Filtrar animes populares
  const popularAnimes = searchTerm 
  ? animes.filter((anime) => 
    anime.title.toLowerCase().includes(searchTerm.toLowerCase())
     ) : [...animes].sort((a, b) => b.members - a.members);

  // Elegir qué lista de animes mostrar
  const displayedAnimes = showPopular ? popularAnimes : filteredAnimes;

  return (
    <div>
      {openSearch && (
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleSearch={(e) => e.preventDefault()}
          openSearch={openSearch}
          setOpenSearch={setOpenSearch}
        />
      )}


      <BotonChange 
      setShowPopular={setShowPopular}/>

      <div className="container-cards">
        {/* Mostrar mensaje si no hay resultados */}
        {displayedAnimes.length === 0 ? (
          <p>
            No se encontraron resultados para: <strong>{searchTerm}</strong>
          </p>
        ) : (
          displayedAnimes.map((anime) => (
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
