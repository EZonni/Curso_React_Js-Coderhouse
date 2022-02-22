import React, {useEffect, useState} from "react";
import ItemDetail from "./ItemDetail";
import Stock from "../stock/stock";

const ItemDetailContainer = () => {

    const [myDetail, setMyDetail] = useState([]);

    const getDetail = new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(Stock)
        }, 2500);
    });

    useEffect(() => {
        getDetail.then((details) => {
            setMyDetail(details);
        });
    }, []);

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