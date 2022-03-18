import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { collection, getDocs, query, where } from "firebase/firestore";
import db from "../services/firebase";
import { useParams } from "react-router-dom";



function ItemListContainer() {

    const [items, setItems] = useState([]);
    const {category} = useParams();

    const getData = async () => {
        try {
            const itemsCollection = collection(db, "Stock");
            const col = await getDocs(itemsCollection);
            const result = col.docs.map((doc) => doc = {id:doc.id, ...doc.data()});
            setItems(result);
        } catch (error) {
            console.warn("error", error);
        };
    };

    const getDataCategory_query = async () => {
        try {
            const q = query(collection(db, "Stock"), where("category", "==", category));
            const querySnapshot = await getDocs(q);
            setItems(querySnapshot.docs.map((doc) => doc = {id:doc.id, ...doc.data()}));
        } catch (error) {
            console.warn("error", error);
        };
    };

    useEffect(() => {
        category ? getDataCategory_query() : getData();
    }, [category]);
    
    return(
            <>
                <div>
                    <ItemList productos={items}/>
                </div>
            </>
    );
};

export default ItemListContainer;