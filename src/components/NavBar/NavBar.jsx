import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
    return (
        <>
            <Navbar bg="info bg-opacity-25" expand="lg" fixed="top">
            <Container fluid>
                <Navbar.Brand href="#">Tienda de Buceo</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action1" >Destacados</Nav.Link>
                        <NavDropdown title="Buceo Profesional" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Cascos</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Umbilicales</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Cuchillos</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Contactarme con un representante tecnico</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title="Buceo Recreativo" id="navbarScrollingDropdown">
                            <NavDropdown.Item href="#action3">Reguladores</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Lunetas</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Aletas</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">Botellones</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">Contactarme con un representante tecnico</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form className="d-flex">
                        <Form.Control
                        type="search"
                        placeholder="Estoy buscando..."
                        className="me-2"
                        aria-label="Search"
                        />
                        <Button variant="outline-light">Buscar</Button>
                    </Form>
                    <CartWidget/>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </>
    )
}

export default NavBar