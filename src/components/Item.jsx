import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
//import ItemCount from "./ItemCount";

const Item = ({title, price, img}) => {

    return(
        <>
        <Card style={{ width: '18rem', margin: `50px` }}>
            <Card.Img variant="top" src={img} alt={title} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>${price}</Card.Subtitle>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "15px"}}>
                <Button variant="primary">Ver más</Button>
            </div>
            {/* <ItemCount stock={10} initial={1} onAdd={onAdd}/> */}
            </Card.Body>
        </Card>
        </>
    );
};

export default Item;