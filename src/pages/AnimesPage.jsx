import React, { useEffect } from 'react'
import './styles/animesPage.css'
import useFetch from '../hooks/useFetch'
import AnimeCard from '../components/AnimeCard'
import { Link } from 'react-router-dom';

const AnimesPage = () => {
    const { data: animes, fetchData, loading, error } = useFetch();

  

    useEffect(() => {
        const url = `https://api.jikan.moe/v4/anime`;
        fetchData(url);
    }, []);

    if (loading) return <p>Cargando animes...</p>;
    if (error) return <p>Hubo un error al cargar los animes</p>;

    return (
        <div>
            <div className='container-cards'>
                {animes.map((anime) => (
                    <Link to={`/anime/${anime.mal_id}`} key={anime.mal_id}>
                    <AnimeCard
                        anime={anime} // Pasando el anime completo como7 prop
                        
                    />
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default AnimesPage;
