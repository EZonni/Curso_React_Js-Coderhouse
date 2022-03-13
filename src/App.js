import './App.css';
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "../src/components/ItemListContainer";
import ItemDetailContainer from "../src/components/ItemDetailContainer";
import Cart from "../src/components/Cart";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import { CartProvider } from "./context/CartContext";

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <header>
            <NavBar/>
          </header>
          <Routes>
            <Route path="/" element={<ItemListContainer/>}/>
            <Route path="/itemCategory/:category" element={<ItemListContainer/>}/>
            <Route path="/item/:id" element={<ItemDetailContainer/>}/>
            <Route path='/cart' element={<Cart/>}/>
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </>
  );
};

export default App;