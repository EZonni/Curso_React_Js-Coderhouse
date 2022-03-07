import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";

const Item = ({title, price, img, id}) => {

    return(
        <>
        <Card style={{ width: '18rem', margin: `50px` }}>
            <Card.Img variant="top" src={img} alt={title} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>${price}</Card.Subtitle>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center", margin: "15px"}}>
                <Link to={`/item/${id}`}>
                    <Button variant="primary"> Ver más </Button>
                </Link>
            </div>
            </Card.Body>
        </Card>
        </>
    );
};

export default Item;