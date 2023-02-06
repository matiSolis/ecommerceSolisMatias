import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <>
            <Navbar bg="info bg-opacity-100" expand="lg" fixed="top">
            <Container fluid>
                {/* <Navbar.Brand href="#">Tienda de Buceo</Navbar.Brand> */}
                <Link to='/'>Tienda de Buceo</Link>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to='/categoria/cascosYmascaras' className= {({isActive})=> isActive ? 'btn btn-primary m-1' : 'btn btn-outline-primary m-1'} >Cascos y mascaras</NavLink>
                        <NavLink to='/categoria/umbilicales' className= {({isActive})=> isActive ? 'btn btn-primary m-1' : 'btn btn-outline-primary m-1'} >Umbilicales</NavLink>
                        <NavLink to='/categoria/cuchillos' className= {({isActive})=> isActive ? 'btn btn-primary m-1' : 'btn btn-outline-primary m-1'} >Cuchillos</NavLink>
                        <NavLink to='/categoria/reguladores' className= {({isActive})=> isActive ? 'btn btn-primary m-1' : 'btn btn-outline-primary m-1'} >Reguladores</NavLink>
                        <NavLink to='/categoria/lunetas' className= {({isActive})=> isActive ? 'btn btn-primary m-1' : 'btn btn-outline-primary m-1'} >Lunetas</NavLink>
                        <NavLink to='/categoria/aletas' className= {({isActive})=> isActive ? 'btn btn-primary m-1' : 'btn btn-outline-primary m-1'} >Aletas</NavLink>
                        <NavLink to='/categoria/botellones' className= {({isActive})=> isActive ? 'btn btn-primary m-1' : 'btn btn-outline-primary m-1'} >Botellones</NavLink>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Estoy buscando..."
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button >Buscar</Button>
                    </Form>
                    <CartWidget/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default NavBar