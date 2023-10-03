import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Pokemons } from "./components/PokeList";
import { PokemonName } from './components/PokeName';
import { Brand } from "./components/Brand";
import Items from './components/Items';
import Carrito from './components/Carrito';

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
    <a href='/pokemons'>VER CATALOGO</a>
      <Routes>
        <Route path="/" element={<h1>HOLA COMO ESTAS</h1>} />
        <Route 
        exact path="./pages/Tienda" 
        element={<h1>Tienda</h1>} />
      <Route 
      exact path="/pokemons" 
      element={<Pokemons/>}/>
      <Route 
      exact path="/pokemon/:pokemonName" 
      element={<PokemonName/>}/>
      </Routes>

    </BrowserRouter>


  );
}


export default App;
