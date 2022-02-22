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
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", margin: "15px"}}>
                <Button variant="secondary" onClick={restarItem}>-</Button>
                <h3>{count}</h3>
                <Button variant="secondary" onClick={sumarItem}>+</Button>
            </div>
            <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
                <Button variant="primary" onClick={() => onAdd(count)}>Agregar al carrito</Button>
            </div>
        </>
    );

};

export default ItemCount;