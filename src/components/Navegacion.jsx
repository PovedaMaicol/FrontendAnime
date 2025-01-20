import React, {useState} from 'react'
import { Button, Navbar, Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';
import "./styles/navegacion.css"

const Navegacion = ( { handleSearch }) => {

  return (

<Navbar 
collapseOnSelect 
expand="lg" 
bg='dark' 
variant="dark" 
className='container_menu'>
  
<h1 style={{color: 'white'}}>Otaku fan</h1>




<div className="container_searchmenu">

<i className='bx bx-search' onClick={() => handleSearch()}></i>

<Navbar.Toggle aria-controls="responsive-navbar-nav" className='icono_hamburguesa'/>
  
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
      <Nav.Link href="#" as="span">
        <a  onClick={() => setPage("authors") }> Inicio </a>
      </Nav.Link>


      <Nav.Link href="#" as="span">
      <a onClick={() => setPage("books") }>Directorio</a>
      </Nav.Link>

      <Nav.Link href="#" as="span">
      <a onClick={() => setPage("add")}>Categorias</a>
      </Nav.Link>
      
      <Nav.Link href="#" as="span">
      <a onClick={() => {setPage("login"), setIsRegister(true)}} >Próximos animes</a>
      </Nav.Link>
      

      <Nav.Link href="#" as="span">
      <a onClick={() => setPage("recommend")}>Animes en emision</a>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</div>


  
  
</Navbar>





  






  )
}

export default Navegacion