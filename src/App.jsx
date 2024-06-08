import './App.css'

import { Route, Routes } from 'react-router-dom'
import AnimesPage from './pages/AnimesPage'

function App() {


 


  return (
    <Routes>
      <Route path='/' element={<AnimesPage/>}/>
    </Routes>
    
  
  )
}

export default App
