import './App.css';
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "../src/components/ItemListContainer";
import ItemDetailContainer from "../src/components/ItemDetailContainer"
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <header>
        <NavBar/>
      </header>
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;