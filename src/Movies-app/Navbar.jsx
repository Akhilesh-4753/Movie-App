import React, { useContext, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import { BiSolidCameraMovie } from "react-icons/bi";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { MovieContext } from '../App';


const NavbarZ = () => {

    const { movieDetailed, setFilteredMovies} = useContext(MovieContext);
    
    const [searchTerm, setSearchTerm] = useState("");
    const navigate = useNavigate();
    
    const handleSearch = (e) => {
         e.preventDefault();
    
        if (searchTerm.trim()) {
          
          const filtered = movieDetailed.filter((movie) => 
               movie.title?.toLowerCase().includes(searchTerm.toLowerCase()) || 
               movie.overview?.toLowerCase().includes(searchTerm.toLowerCase())
          );
        setFilteredMovies(filtered);
        navigate('/search-results');
      }
    };
  return (
    <div>
      <Navbar expand="lg" className="bg-body-tertiary navbar-fixed">
      <Container>
        <Navbar.Brand href="#home" className='fs-1'><Link className='link' to={'/'}>MOVIES</Link><BiSolidCameraMovie /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto fs-4 nav-bar'> 
            <Nav.Link href="#link"><Link className='link child' to={'/latest'}>Latest</Link></Nav.Link>
            <Nav.Link href="#home"><Link className='link child' to={'/popular'}>Popular</Link></Nav.Link>
            <Nav.Link href="#link"><Link className='link child' to={'/comedy'}>Comedy</Link></Nav.Link>
          </Nav>
          <Form className="d-flex form" onSubmit={handleSearch}>
              <Form.Control
                type="search"
                placeholder="Search movies..."
                className="me-2"
                aria-label="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Button type='submit' variant="outline-primary">Search</Button>
            </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarZ;