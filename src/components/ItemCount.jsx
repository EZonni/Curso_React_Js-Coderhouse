import React, { useState } from "react";
import Button from "react-bootstrap/Button"

const ItemCount = ({ stock, initial, onAdd }) => {

    const [count, setCount] = useState(initial);

    const sumarItem = () => {
        count < stock ? setCount(count + 1) : setCount(count);
    };

    const restarItem = () => {
        count === initial ? setCount(count) : setCount(count - 1);
    };

    return(
        <>
            <div style={{display: "flex", alignItems: "center", justifyContent: "space-around", margin: "25px"}}>
                <Button variant="secondary" onClick={restarItem} style={{marginRight: `20px`}}> - </Button>
                <h3>{count}</h3>
                <Button variant="secondary" onClick={sumarItem} style={{marginLeft: `20px`}}> + </Button>
            </div>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                {
                    count > 0 ?
                        <Button variant="primary" onClick={() => onAdd(count)}> Agregar al carrito </Button>
                    :   <> <Button disabled="true" variant="primary" onClick={() => onAdd(count)}> Agregar al carrito </Button> </>
                }
            </div>
        </>
    );

};

export default ItemCount;