import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import RecycleBin from "../assets/RecycleBin.png"

const Cart = () => {

    const {cartProducts, removeItems, finalPrice, cleanCart} = useContext(CartContext);

    return(

        <>

            {cartProducts.length === 0 ? (

                <>
                <div>
                    <Card style={{margin: `50px`}}>
                    <Card.Body style={{ display: "flex", flexDirection:"column", alignItems:"center"}}>
                                <Card.Title>No hay productos en el carrito de compras</Card.Title>
                                <Link to={"/"}>
                                    <Card.Subtitle style={{marginTop: "15px"}}>Haz click aquí para recorrer nuestro catálogo</Card.Subtitle>
                                </Link>
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
                                <div>
                                <Card.Img variant="left" src={producto.img} alt={producto.title} style={{width: `200px`}} />
                                </div>
                                <div>
                                <Card.Title>Producto: {producto.title}</Card.Title>
                                <Card.Subtitle>Cantidad: {producto.quantity}</Card.Subtitle>
                                </div>
                                <div>
                                <Card.Title>Total por producto: ${producto.price * producto.quantity}</Card.Title>
                                <Card.Subtitle>Precio por unidad: ${producto.price}</Card.Subtitle>
                                </div> 
                                <Button variant="danger" onClick={()=>removeItems(producto)}> <img src={RecycleBin} alt="RecycleBin" style={{width: `20px`}}/> </Button>
                    </Card.Body>
                    </Card>                   
                    </>
                )
                            
                }))

            }
            {cartProducts.length === 0 ? <></>
            : ( <>
                    <div style={{marginLeft: `10px`, marginTop: "25px"}}>
                        <Card.Title>Total compra: ${finalPrice}</Card.Title>
                        <Button variant="danger" onClick={cleanCart}>Vaciar carrito </Button>
                    </div>
                </>
              )}

        </>
    );
};


export default Cart;