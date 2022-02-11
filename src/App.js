import './App.css';
import NavBar from "./components/NavBar.jsx";
import ItemListContainer from "../src/components/ItemListContainer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <>
      <header>
        <NavBar/>
      </header>
      <main>
        <ItemListContainer texto="Próximamente"/>
      </main>
    </>
  );
}

export default App;