import React, { useState } from "react";

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
            <div>
                <h3>{count}</h3>
                <button onClick={restarItem}>-</button>
                <button onClick={sumarItem}>+</button>
            </div>
            <div>
                <button onClick={() => onAdd(count)}>Agregar al carrito</button>
            </div>
        </>
    );

};

export default ItemCount;