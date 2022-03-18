import React, { useContext } from "react";
import '../App.css';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown"
import logo from "../assets/Img.png"
import { CartContext } from "../context/CartContext";

function NavBar() {

    const { productsCount } = useContext(CartContext);

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
                    <Link to={`/`} style={{textDecoration: "none"}}>
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Link>
                    <Nav.Link href="#nosotros">Nosotros</Nav.Link>
                    <NavDropdown title="Productos" id="collasible-nav-dropdown">
                        <Link to={`/itemCategory/:volante`} style={{textDecoration: "none"}}>
                            <NavDropdown.Item href="#action/3.1">Volantes</NavDropdown.Item>
                        </Link>
                        <Link to={`/itemCategory/:pedalera`} style={{textDecoration: "none"}}>
                            <NavDropdown.Item href="#action/3.2">Pedaleras</NavDropdown.Item>
                        </Link>
                        <Link to={`/itemCategory/:accesorio`} style={{textDecoration: "none"}}>
                            <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
                        </Link>
                    </NavDropdown>
                </Nav>
                <CartWidget count={productsCount}></CartWidget>
            </Navbar>
    );
};

export default NavBar;