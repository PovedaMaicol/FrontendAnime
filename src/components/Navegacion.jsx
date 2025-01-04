import React from 'react'
import { Button, Navbar, Nav} from "react-bootstrap";
import { Link } from 'react-router-dom';

const Navegacion = () => {
  return (

<Navbar 
collapseOnSelect 
expand="lg" 
bg='dark' 
variant="dark" 
style={{
  paddingLeft: '15px', 
  paddingRight: '15px', 
  position: 'fixed',
  top: '0',
  width: '100%', 
  zIndex: '3'
  }}
  >
  
<h1 style={{color: 'white'}}>Otaku fan</h1>
<i style={{color: 'white'}}className='bx bxs-user'></i>

  <Navbar.Toggle aria-controls="responsive-navbar-nav" style={{border: '1px solid white'}}/>
  
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
  
</Navbar>





  






  )
}

export default Navegacion