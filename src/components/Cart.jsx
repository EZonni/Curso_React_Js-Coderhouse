import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import RecycleBin from "../assets/RecycleBin.png"

const Cart = () => {

    const {cartProducts, removeItems} = useContext(CartContext);

    return(

        <>

            {cartProducts.length === 0 ? (

                <>
                <div>
                    <Card style={{margin: `50px`}}>
                    <Card.Body style={{ display: "flex", justifyContent: "space-around"}}>
                                <Card.Title>No hay productos en el carrito de compras</Card.Title>
                    </Card.Body>
                    </Card>
                </div>
                </>

            )
            : (cartProducts.map((producto) => {
                            
                return(
                    <>
                    <Card style={{margin: `10px`, marginRight: `500px`}}>
                    <Card.Body style={{ display: "flex", flexDirection: "row", alignItems: "center", justifyContent: "space-around"}}>
                                <Card.Img variant="left" src={producto.img} alt={producto.title} style={{width: `200px`}} />
                                <Card.Title>{producto.title}</Card.Title>
                                <Card.Title>Cantidad: {producto.quantity}</Card.Title>
                                {/* <Card.Title>Precio: ${producto.price}</Card.Title> */}
                                <Button variant="danger" onClick={(producto)=>removeItems(producto)}> <img src={RecycleBin} alt="RecycleBin" style={{width: `35px`}}/> </Button>
                    </Card.Body>
                    </Card>
                    </>
                )
                            
                }))

            }

        </>
    );
};

export default Cart;