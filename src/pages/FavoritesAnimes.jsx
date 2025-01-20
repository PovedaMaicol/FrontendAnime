import React from 'react'
import { useLocation } from 'react-router-dom'

const FavoritesAnimes = () => {
  const location = useLocation()
  const animes = location.state?.animes.sort((a, b) => b.members - a.members) || [];


  console.log('datos recibidos en favoritesGenres',animes)
  return (
      <div>
        {
          animes.map((anime) => (
            <div key={anime.id}>
              <h2>{anime.title}</h2>
              <img src={anime.image_url} alt={anime.title} />
            </div>
          ))
        }
      <h1>Animes más vistos</h1>
      
       
   
    </div>
  )
}

export default FavoritesAnimes