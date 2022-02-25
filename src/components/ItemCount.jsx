import React, { useState } from "react";
import Button from "react-bootstrap/Button"

function ItemCount({ stock, initial, onAdd}) {

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
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Button variant="primary" onClick={() => onAdd(count)}>Agregar al carrito</Button>
            </div>
            <div style={{marginTop: `20px`}}>
                <p>{stock} unidades disponibles</p>
            </div>
        </>
    );

};

export default ItemCount;