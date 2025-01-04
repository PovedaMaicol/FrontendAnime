import React, { useEffect } from 'react'
import './styles/animesPage.css'
import useFetch from '../hooks/useFetch'
import AnimeCard from '../components/AnimeCard'

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
                    <AnimeCard
                        key={anime.mal_id}
                        anime={anime} // Pasando el anime completo como prop
                        
                    />
                ))}
            </div>
        </div>
    );
};

export default AnimesPage;
