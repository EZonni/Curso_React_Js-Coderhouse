import React from "react";
import '../App.css';
import carrito from "../../src/assets/IconoCarrito.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";


function CartWidget({count}) {
    return(
        <Link to={"/cart"}>
            <Button variant="light" style={{marginRight:"35px"}}>
                <div style={{display: "flex", flexDirection: "row"}}>
                    <img alt="icono carrito" className="iconoCarrito" src={carrito}></img>
                    <span style={{marginLeft: `10px`, fontSize: `20px`}}> {count} </span>
                </div>
            </Button>
        </Link>
    );  
};

export default CartWidget;