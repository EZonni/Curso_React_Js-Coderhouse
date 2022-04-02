import React, { useContext, useState } from "react";
import '../App.css';
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Swal from "sweetalert";
import RecycleBin from "../assets/RecycleBin.png"
import { addDoc, collection, Timestamp } from "firebase/firestore";
import db from "../services/firebase";


const Cart = () => {

    const {cartProducts, removeItems, finalPrice, removeCartProducts} = useContext(CartContext);
    const[order, setOrder] = useState();
    
    const handleOrder = async (e) => {

        e.preventDefault();

        if(e.target[0].value === "" || e.target[1].value === "" || e.target[2].value === "") {
            Swal("", "Debes ingresar tus datos para finalizar la compra", "error")
        } else {

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
                Swal("¡Gracias por tu compra!", `Tu N° de orden es: ${docReferenceId}`, "success");

            } catch (error) {
                console.log('Error', error)
            };

            setTimeout(()=>{
                removeCartProducts()
            }, 1500);

        }
        
    };

    const alertaVaciarCarrito = () => {

        Swal({
            title: "Estás a punto de vaciar el carrito",
            text: "Una vez eliminado no podrás recuperarlo",
            icon: "warning",
            buttons: true,
            dangerMode: true,
          })
          .then((willDelete) => {
            if (willDelete) {
              Swal("El carrito ha sido vaciado correctamente", {
                icon: "success",
              });
              removeCartProducts();
            }
          });

    };


    return(

        <>
            {cartProducts.length === 0 ? (
                <>
                <div>
                    <Card style={{margin: `50px`}}>
                    <Card.Body id="emptyCartCardBody">
                                <Card.Title>No hay productos en el carrito de compras</Card.Title>
                                <Link to={"/"}>
                                    <Card.Subtitle style={{marginTop: "15px"}}>Haz click aquí para recorrer nuestro catálogo</Card.Subtitle>
                                </Link>
                    </Card.Body>
                    </Card>
                </div>
                </>
            )
            : ( 
                <>
                <div id="cartDivContainer">

                    <div style={{width: `1000px`}}>
                
                        {
                            (cartProducts.map((producto) => {
                                        
                                return(
                                    <>
                                    <Card style={{margin: `10px`}}>
                                    <Card.Body id="cartCardBody">
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
                    </div>

                    <div>
                        <Card style={{margin: `10px`}}>
                            <Card.Body>
                                <Card.Title>Total compra: ${finalPrice}</Card.Title>
                                <div style={{width: "350px"}}>
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
                                                <Button variant="danger" onClick={alertaVaciarCarrito}>Vaciar carrito </Button>
                                            </div>
                                        </Form.Group>
                                    </Form>
                                </div>
                            </Card.Body>
                        </Card>
                    </div>

                </div>
                </>
            )
            };
        </>

    );  

};


export default Cart;