import React, { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Table, Badge, Card, Spinner, Alert, Button } from 'react-bootstrap';
import './styles/animeId.css';

const AnimeId = () => {
  const { id } = useParams(); // Capturo el id del anime desde la URL
  const { data: animeId, fetchData, loading, error } = useFetch(); // Obtener la data del anime específico
  const [showFullSynopsis, setShowFullSynopsis] = useState(false);

  useEffect(() => {
    const url = `https://api.jikan.moe/v4/anime/${id}`;
    fetchData(url); // Llamar a la función fetchData con la URL específica
    console.log('el id es:', id); // Verificar que el anime se cargó correctamente  
  }, [id]);

  const toggleSynopsis = () => {
    setShowFullSynopsis(!showFullSynopsis); // Cambiar el estado de showFullSynopsis
  };


  const getResumeSynopsis = (synopsis) => {
    const parts = synopsis.split('.'); // Dividir la sinopsis en partes
    const firstPart = parts.slice(0, 2).join('.') + '.'; // Tomar las primeras dos partes y unirlas
    const secondPart = parts.slice(2).join('.'); // Guardar el resto de la sinopsis
    return { firstPart, secondPart }; // Retornar las dos partes
  };

  if (loading) {
    return (
      <Container className="text-center py-5">
        <Spinner animation="border" role="status" variant="primary">
          <span className="visually-hidden">Cargando...</span>
        </Spinner>
        <p>Cargando anime...</p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="text-center py-5">
        <Alert variant="danger">Hubo un error al cargar el anime</Alert>
      </Container>
    );
  }

  // Verificar si animeId y las propiedades existen antes de renderizarlas
  if (!animeId || !animeId.genres) {
    return (
      <Container className="text-center py-5">
        <Alert variant="warning">No se pudo cargar la información del anime.</Alert>
      </Container>
    );
  }

  const { firstPart, secondPart } = getResumeSynopsis(animeId.synopsis || '');



  return (
    <Container className="py-4">

        <div className='container-first'>


          <Card className="img-card">
            <Card.Img
            className='img-anime'
              variant="top"
              src={animeId.images?.webp?.large_image_url}
              alt={animeId.title}
            />
          </Card>
          <div className='container-tablaGenre'>
          <Table striped bordered hover className='tabla'>
            <thead className='table-head'>
              <tr>
                <th>Atributo</th>
                <th>Valor</th>
              </tr>
            </thead>


            <tbody className='table-body'>
              <tr>
                <td>Episodios</td>
                <td>{animeId.episodes || 'Desconocido'}</td>
              </tr>
              <tr>
                <td>Puntaje</td>
                <td>{animeId.score || 'N/A'}</td>
              </tr>
              <tr>
                <td>Rango</td>
                <td>{animeId.rank || 'N/A'}</td>
              </tr>
              <tr>
                <td>Miembros</td>
                <td>{animeId.members.toLocaleString()}</td>
              </tr>
              <tr>
                <td>Estado</td>
                <td>{animeId.status}</td>
              </tr>
            </tbody>
          </Table>
          </div>   


        </div>

        <div className='title-genres'> 
        <h4 >{animeId.title}</h4>


        <div className='generos'> 
    <p className="text-primary">Géneros:</p>
  <div className="container-genres">
    {animeId.genres.map((genre) => (
      <p key={genre.mal_id} >
         {genre.name}
      </p>
       
    
    ))}
  </div>
        </div>

        </div>

      

      

        
   


      <Card className="shadow-sm">
        <Card.Body>
          <Card.Title>Sinopsis</Card.Title>
          <Card.Text className='sinopsis'>
          { showFullSynopsis ? (
            <>
            {firstPart + secondPart}
            <Button  variant='link' onClick={toggleSynopsis}>
            Mostrar menos
            </Button>
            
            </>
          ) : (
            <>
            {firstPart}
            <Button variant='link' onClick={toggleSynopsis}>
            Mostrar mas
            </Button>
            </>
          )}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default AnimeId;
