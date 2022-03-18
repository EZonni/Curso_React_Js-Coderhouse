import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import RecycleBin from "../assets/RecycleBin.png"
import { doc, addDoc, collection, getDoc, Timestamp, updateDoc } from "firebase/firestore";
import db from "../services/firebase";


const Cart = () => {

    const {cartProducts, removeItems, finalPrice, removeCartProducts} = useContext(CartContext);
    const[order, setOrder] = useState();
    
    const handleOrder = async (e) => {

        e.preventDefault();

        let order = {
            buyer: {
                name: e.target[0].value,
                email: e.target[1].value,
                phone: e.target[2].value,
            },
            date: Timestamp.fromDate(new Date()),
            items: cartProducts,
            total: finalPrice,

        };

        setOrder(order);

        try {
            const queryCollection = collection(db, 'Orders');
            const docReference = await addDoc(queryCollection, order);
            const docReferenceId = docReference.id;
            alert(`¡Compra exitosa! Tu N° de orden es: ${docReferenceId}`);

        } catch (error) {
            console.log('Error', error)
        };

        setTimeout(()=>{
            removeCartProducts()
        }, 1000);
        
    };

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
                        <div style={{width: "500px"}}>
                        <Form onSubmit={handleOrder}>
                            <Form.Group className="mb-3">
                                <Form.Label>Nombre y Apellido</Form.Label>
                                <Form.Control/>
                                <Form.Label>Email</Form.Label>
                                <Form.Control/>
                                <Form.Label>Teléfono</Form.Label>
                                <Form.Control/>
                                <div style={{marginTop: "20px"}}>
                                    <Button type="submit" variant="success">Finalizar compra</Button>
                                </div>
                                <div style={{marginTop: "20px", marginBottom: "20px"}}>
                                    <Button variant="danger" onClick={removeCartProducts}>Vaciar carrito </Button>
                                </div>
                            </Form.Group>
                        </Form>
                        </div>
                    </div>
                </>
              )}
        </>
    );
};


export default Cart;