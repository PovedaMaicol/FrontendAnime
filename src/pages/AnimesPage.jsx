import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Navegacion from '../components/Navegacion'

const AnimesPage = () => {

    const [animes, setAnimes] = useState([])
 


    useEffect(() => {
     const url = `https://api.jikan.moe/v4/anime` 
     axios
      .get(url)
      .then(response => {
      console.log('datos recibidos: ', response.data.data)
      setAnimes(response.data.data) 
    
    })
    .catch(error => {
      console.log(error)
    })
    
      }, [])


  return (
    <div>
        <Navegacion/>
    <figure>
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