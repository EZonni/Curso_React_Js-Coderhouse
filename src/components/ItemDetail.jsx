import React from "react";
import Card from "react-bootstrap/Card";
import ItemCount from "./ItemCount";

const ItemDetail = ({title, price, img, description}) => {

    const onAdd = (count) => {
        alert(`Se agregaron ${count} productos al carrito`)
    };

    return(
        <>
        <Card style={{ width: '18rem', margin: `50px` }}>
            <Card.Img variant="top" src={img} alt={title} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>${price}</Card.Subtitle>
            <Card.Subtitle>Descripción</Card.Subtitle>
            <Card.Text>${description}</Card.Text>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
            </div>
            </Card.Body>
        </Card>
        </>
    );
};

export default ItemDetail;