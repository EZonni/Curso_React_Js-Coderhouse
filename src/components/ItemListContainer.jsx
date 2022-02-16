import React from "react";
import ItemCount from "./ItemCount.jsx";

function ItemListContainer() {
    return(
            <>
                <ItemCount stock="10" initial="1"/>
            </>
    );
};

export default ItemListContainer;