import React, { useState } from 'react'
import './App.css'
import Navegacion from './components/Navegacion'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AnimesPage from './pages/AnimesPage'
import AnimeCard from './components/AnimeCard'
import AnimeId from './pages/AnimeId'
import './App.css'
// import FavoritesAnimes from './pages/FavoritesAnimes'
import BotonChange from './components/BotonChange'







function App() {

  const [openSearch, setOpenSearch] = useState(false)
  const handleSearch = () => {
    setOpenSearch(!openSearch)// Alterna el estado actual
    console.log('openSearch es', openSearch)
  };
  

  return (
    <div className='first_container'>
      <Navegacion handleSearch={handleSearch} />
  

      <div>
    <Routes>
      <Route path='/' element={<AnimesPage 
      openSearch={openSearch}
      setOpenSearch={setOpenSearch}
      />}/>
      {/* <Route path='favorites' element={<FavoritesAnimes />}/> */}
      <Route path='anime/:id' element={<AnimeId />}/>
    </Routes>
    
    </div>
    </div>
  )
}

export default App
