import '../App.css';
import Button from "react-bootstrap/Button";
import carrito from "../../src/assets/IconoCarrito.png"

function CartWidget() {
    return(
        <Button variant="light" style={{marginRight:"35px"}}>
            <img alt="icono carrito" className="iconoCarrito" src={carrito}></img>
        </Button>
    );  
};

export default CartWidget;