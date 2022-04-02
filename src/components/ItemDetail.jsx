import React, { useContext } from "react";
import '../App.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Swal from "sweetalert";
import ItemCount from "./ItemCount"; 
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({title, price, img, description, stock, id}) => {

    const {addItemsToCart, productsCount} = useContext(CartContext);
    
    const handleItemCount = (e) => {
        addItemsToCart({id, title, description, img, stock, price}, e);
        Swal(`${title} agregado al carrito de compras`);
    };

    return(
        <>
        <Card style={{margin: `50px`}}>
        <Card.Body id="itemDetCardBody">
            <div id="itemDetDivContainer">
                <div>
                    <Card.Img variant="left" src={img} alt={title} />
                </div>
                <div id="itemDetInfoContainer">
                    <Card.Title>{title}</Card.Title>
                    <Card.Subtitle>${price}</Card.Subtitle>
                    <ItemCount stock={stock} initial={0} onAdd={(e) => handleItemCount(e)}/>
                    { 
                        productsCount > 0 ?
                            (<>
                                <div style={{marginBottom: `20px`, marginTop: `20px`}}>
                                    <Link to={"/cart"}>
                                        <Button variant="success"> Finalizar compra </Button>
                                    </Link>
                                </div>
                            </>)
                        : <></>
                    }
                    <div style={{marginTop: `20px`}}>
                        <p>{stock} unidades disponibles</p>
                    </div>
                </div>
            </div>
            <div>
                <Card.Subtitle> Descripción </Card.Subtitle>
                <Card.Text>{description}</Card.Text>
            </div>
            
        </Card.Body>
        </Card>
        </>
    );
};

export default ItemDetail;