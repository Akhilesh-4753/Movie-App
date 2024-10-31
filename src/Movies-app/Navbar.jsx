import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { BiSolidCameraMovie } from "react-icons/bi";


const NavbarZ = () => {
  return (
    <div style={{ position: "fixed", top: "-10", zIndex: 1000 ,width:"100%"}}>
      <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home" className='fs-1'><Link className='link' to={'/'}>MOVIES</Link><BiSolidCameraMovie /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className='ms-auto fs-4'>
            <Nav.Link href="#link"><Link className='link child' to={'/latest'}>Latest</Link></Nav.Link>
            <Nav.Link href="#home"><Link className='link child' to={'/popular'}>Popular</Link></Nav.Link>
            <Nav.Link href="#link"><Link className='link child' to={'/comedy'}>Comedy</Link></Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default NavbarZ