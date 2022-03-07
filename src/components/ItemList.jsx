import React from "react";
import Item from "./Item";

const ItemList = ({productos}) => {

    return(
        <div style={{
            display: `flex`,
            justifyContent: `center`,
            alignContent: `center`,
            flexWrap: `wrap`
            }}>

            {productos.map((producto) => (
                <Item {...producto} key={producto.id}/>
            ))}

        </div>
    );
    
};

export default ItemList;