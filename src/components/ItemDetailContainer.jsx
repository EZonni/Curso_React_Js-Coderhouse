import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import Stock from "../stock/stock";

const ItemDetailContainer = () => {

    const {id} = useParams();
    const [myDetail, setMyDetail] = useState([]);
    
    const getDetail = (nombreProducto) => {
        return new Promise ((resolve, reject) => {
            const productosStock = Stock;
            const productoSeleccionado = productosStock.find((elemento) => elemento.id === nombreProducto);
            setTimeout(() => {
                resolve(productoSeleccionado)
            }, 1000);
        });
    };

    useEffect(() => {
        const obtenerProductoSeleccionado = async(id) => {
            const responsePromise = await getDetail(id);
            setMyDetail(responsePromise);
        };
        obtenerProductoSeleccionado(id);
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