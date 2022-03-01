import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button"
import Card from "react-bootstrap/Card";

function ItemCount({ stock, initial, onAdd, cart}) {

    const inicial = parseInt(initial); 
    const [count, setCount] = useState(inicial);

    const sumarItem = () => {
        count < stock ? setCount(count + 1) : setCount(count);
    };

    const restarItem = () => {
        count === inicial ? setCount(count) : setCount(count - 1);
    };

    return(
        <>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", margin: "25px"}}>
                <Button variant="secondary" onClick={restarItem} style={{marginRight: `20px`}}>-</Button>
                <h3>{count}</h3>
                <Button variant="secondary" onClick={sumarItem} style={{marginLeft: `20px`}}>+</Button>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                {
                    cart === 0
                    ? <Button variant="primary" onClick={() => onAdd(count)}>Agregar al carrito</Button>
                    :   <>
                        <div style={{marginBottom: `20px`}}>
                            <Card.Subtitle>Producto agregado al carrito</Card.Subtitle>
                        </div>
                        <div>
                            <Link to={"/cart"}>
                                <Button variant="primary">Finalizar compra</Button>
                            </Link>
                        </div>
                        </>
                }
            </div>
            <div style={{marginTop: `20px`}}>
                <p>{stock} unidades disponibles</p>
            </div>
        </>
    );

};

export default ItemCount;