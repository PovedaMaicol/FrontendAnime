import React from 'react'
import { Button } from 'react-bootstrap'
import './styles/botonChange.css'
// import { Link } from 'react-router-dom'


const BotonChange = ({ setShowPopular }) => {

  return (
    <div className='container_buttons'>
        <Button  
          onClick={() => setShowPopular(false)}
          className='btn1 btn-primary'>
            todos los animes
        </Button>

        <Button 
          onClick={() => setShowPopular(true)}
          className='btn2'>
            Animes mas vistos
        </Button>
    </div>

)}
// state={{populares}}
export default BotonChange