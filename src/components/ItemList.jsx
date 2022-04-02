import React from "react";
import '../App.css';
import Item from "./Item";

const ItemList = ({productos}) => {

    return(
        <div id="itemListDiv">

            {productos.map((producto) => (
                <Item {...producto} key={producto.id}/>
            ))}

        </div>
    );
    
};

export default ItemList;