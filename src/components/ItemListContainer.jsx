import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import Stock from "../stock/stock";



function ItemListContainer() {

    const [items, setItems] = useState([]);

    const getStock = new Promise ((resolve, reject) => {
        setInterval(() => {
            resolve(Stock)
        }, 2500);
    });

    useEffect(() => {
        getStock.then((items) => {
            setItems(items);
        })
    }, []);
    
    return(
            <>
                <div>
                    <ItemList productos={items}/>
                </div>
            </>
    );
};

export default ItemListContainer;