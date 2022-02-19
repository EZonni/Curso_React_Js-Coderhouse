import React, {useEffect} from "react";
import ItemList from "./ItemList";
import Stock from "../stock/stock";



function ItemListContainer() {
    
    return(
            <>
                <div>
                    <ItemList productos={Stock}/>
                </div>
            </>
    );
};

export default ItemListContainer;