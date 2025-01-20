import React from 'react'
import { Button } from 'react-bootstrap'
import './styles/botonChange.css'
import { Link } from 'react-router-dom'


const BotonChange = ({animes}) => {
  const handleLog = () => {
    console.log('Datos pasados a Link:', animes);
  };

  return (
    <div className='container_buttons'>
        <Button  className='btn1 btn-primary'>todos los animes</Button>
        <Button 
         className='btn2'
         onClick={handleLog}>
          <Link 
          to={{pathname: '/favorites'}}
          state={{animes}}
          >
        Animes mas vistos
        </Link>
        </Button>
    </div>

)}
// state={{populares}}
export default BotonChange