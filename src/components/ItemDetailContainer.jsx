import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import db from "../services/firebase";

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [myDetail, setMyDetail] = useState([]);

    const getDetail = async () => {
        try {
            const document = doc(db, "Stock", id);
            const response = await getDoc(document);
            const result = {id:response.id, ...response.data()};
            setMyDetail(result);
        } catch (error) {
            console.warn("error", error);
        };
    };

    useEffect(() => {
        getDetail()
    }, [id]);

    return(
        <div style={{
            display: `flex`,
            justifyContent: `center`,
            alignContent: `center`,
            }}>

            <ItemDetail {...myDetail} />
            
        </div>
    );

};

export default ItemDetailContainer;