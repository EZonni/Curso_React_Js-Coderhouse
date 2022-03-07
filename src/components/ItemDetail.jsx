import React, { useContext, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import ItemCount from "./ItemCount"; 
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const ItemDetail = ({title, price, img, description, stock, id}) => {

    const {addItemsToCart, productsCount} = useContext(CartContext);
    
    const handleItemCount = (e) => {
        addItemsToCart({id, title, description, img, stock}, e);
        alert(`${title} agregado al carrito de compras`);
    };

    return(
        <>
        <Card style={{margin: `50px`}}>
        <Card.Body style={{ width: '1000px', margin: `50px`, display: "flex", flexDirection: "column" }}>
            <div style={{display: "flex", flexDirection: "row", justifyContent: "space-around", marginBottom: `50px` }}>
                <div>
                    <Card.Img variant="left" src={img} alt={title} />
                </div>
                <div style={{display: "flex", flexDirection:"column", alignItems: "center", justifyContent: "center"}}>
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