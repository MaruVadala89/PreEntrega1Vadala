import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';


function NavBoot() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand >Adopta una Planta</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"}>Inicio</Nav.Link>
            <Nav.Link as={Link} to={"/Interior"}>Plantas de Interior</Nav.Link>
            <Nav.Link as={Link} to={"/Exterior"}>Plantas de Exterior</Nav.Link>
            <Nav.Link as={Link} to={"/Contacto"}>Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <CartWidget />
      
    </Navbar>
  );
}

export default NavBoot;