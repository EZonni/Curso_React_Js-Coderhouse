import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";

const ItemDetail = ({title, price, img, description, stock}) => {

    const onAdd = (count) => {
        alert(`Se agregaron ${count} productos al carrito`)
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
                    <ItemCount stock={stock} initial={1} onAdd={onAdd}/>
                </div>
            </div>
            <div>
                <Card.Subtitle>Descripción</Card.Subtitle>
                <Card.Text>{description}</Card.Text>
            </div>
            
        </Card.Body>
        </Card>
        </>
    );
};

export default ItemDetail;