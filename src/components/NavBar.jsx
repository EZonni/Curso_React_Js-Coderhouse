import '../App.css';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import logo from "../assets/Img.png"
import CartWidget from "./CartWidget";

function NavBar() {
    return(
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="#home">
                    <img
                        alt="logo"
                        src={logo}
                        width="125"
                        height="100"
                        className="d-inline-block align-top"
                    />{' '}
                </Navbar.Brand>
                <p className="fuente brand">SimGarage</p>
                <Nav className="me-auto fuenteNavbar">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                    <NavDropdown title="Productos" id="collasible-nav-dropdown">
                        <NavDropdown.Item href="#action/3.1">Volantes</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.2">Pedaleras</NavDropdown.Item>
                        <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <CartWidget></CartWidget>
            </Navbar>
    );
};

export default NavBar;