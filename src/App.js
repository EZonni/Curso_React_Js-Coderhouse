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
        <div>
          <ItemListContainer/>
        </div>
      </main>
    </>
  );
}

export default App;