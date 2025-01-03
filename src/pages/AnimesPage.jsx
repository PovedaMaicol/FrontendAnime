import React, { useEffect } from 'react'
import './styles/animesPage.css'
import Navegacion from '../components/Navegacion'
import useFetch from '../hooks/useFetch'

const AnimesPage = () => {
   
    const { data: animes, fetchData, loading, error } = useFetch();
 


    useEffect(() => {
     const url = `https://api.jikan.moe/v4/anime`;
     fetchData(url);
    }, []);

    if (loading) return <p>Cargando animes...</p>;
    if (error)  return <p>Hubo un error al cargar los animes</p>;


  return (
    <div>
        <Navegacion/>
    <figure className='container-cards'>
    {
        animes.map(anime => 
            <img className='anime_img' key={anime.mal_id} src={anime.images.jpg.image_url}>
            </img>
            
        )
    }
    </figure>
    </div>
  )
}

export default AnimesPage