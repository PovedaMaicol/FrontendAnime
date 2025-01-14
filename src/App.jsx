import './App.css'
import Navegacion from './components/Navegacion'

import { Route, Routes } from 'react-router-dom'
import AnimesPage from './pages/AnimesPage'
import AnimeCard from './components/AnimeCard'
import AnimeId from './pages/AnimeId'






function App() {

  return (
    <div>
      <Navegacion />

      <div style={{paddingTop: '60px'}}>
    <Routes>
      <Route path='/' element={<AnimesPage/>}/>
      <Route path='anime/:id' element={<AnimeId />}/>
    </Routes>
    
    </div>
    </div>
  )
}

export default App
