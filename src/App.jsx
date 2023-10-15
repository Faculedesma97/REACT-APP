import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { catalogo } from "./services/pokeapi";
import { Brand } from "./components/Brand";
import Items from './components/Items';
import Carrito from './components/Carrito';
import { Productos } from './components/catalogo';

console.log(catalogo)

function App() {


  return (

    <BrowserRouter>
    <nav id="navbarr" class="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
      <Brand/>
      <Items Name="Productos"/>
      <Items Name="Informacion"/>
      <Carrito/>
      </div>
    </nav>
    <Productos/>
      <Routes>
        <Route path="/" element={<h1>Bienvenidos</h1>} />
        <Route 
        exact path="./pages/Tienda" 
        element={<h1>Tienda</h1>} />

      </Routes>

    </BrowserRouter>


  );
}


export default App;
