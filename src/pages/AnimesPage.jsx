import React, { useEffect, useState } from 'react'
import axios from 'axios'


const AnimesPage = () => {

    const [animes, setAnimes] = useState([])
 


    useEffect(() => {

        const url = `https://api.jikan.moe/v4/anime` 
        axios
    .get(url)
    .then(response => {
      console.log('aqui ahi: ', response.data.data)
      setAnimes(response.data) 
    
    })
    .catch(error => {
      console.log(error)
    })
    
      }, [])


  return (
    <div>AnimesPage</div>
  )
}

export default AnimesPage