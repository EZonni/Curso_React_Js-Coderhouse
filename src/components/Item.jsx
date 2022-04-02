import React from "react";
import '../App.css';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";

const Item = ({title, price, img, id}) => {

    return(
        <>
        <Card id="itemCard">
            <Card.Img variant="top" src={img} alt={title} />
            <Card.Body>
            <Card.Title>{title}</Card.Title>
            <Card.Subtitle>${price}</Card.Subtitle>
            <div id="itemDivBTN">
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