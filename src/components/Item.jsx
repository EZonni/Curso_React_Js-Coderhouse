import React from "react";
import ItemCount from "./ItemCount";

const Item = ({title, price, img}) => {

    const onAdd = (count) => {
        alert(`Se agregaron ${count} productos al carrito`)
    };

    return(
        <div style={{
            margin: `35px`
        }}>
            <div>
                <img src={img} alt={title}/>
            </div>
            <h3>{title}</h3>
            <h4>${price}</h4>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </div>
    );
};

export default Item;