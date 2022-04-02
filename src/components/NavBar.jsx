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
                <Navbar.Brand>
                    <img
                        alt="logo"
                        src={logo}
                        className="d-inline-block align-top navbarImg"
                    />{' '}
                </Navbar.Brand>
                <p className="fuente brand">SimGarage</p>
                <Nav className="me-auto fuenteNavbar">
                    <Link to={`/`} className="linkTextDecoration">
                        <Nav.Link href="#home">Home</Nav.Link>
                    </Link>
                    <NavDropdown title="Productos" id="collasible-nav-dropdown">
                        <Link to={`/category/volante`} className="linkTextDecoration">
                            <NavDropdown.Item href="#action/3.1">Volantes</NavDropdown.Item>
                        </Link>
                        <Link to={`/category/pedalera`} className="linkTextDecoration">
                            <NavDropdown.Item href="#action/3.2">Pedaleras</NavDropdown.Item>
                        </Link>
                        <Link to={`/category/accesorio`} className="linkTextDecoration">
                            <NavDropdown.Item href="#action/3.3">Accesorios</NavDropdown.Item>
                        </Link>
                    </NavDropdown>
                </Nav>
                <CartWidget count={productsCount}></CartWidget>
            </Navbar>
    );
};

export default NavBar;