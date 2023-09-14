import Brand from "./components/Brand";
import Options from "./components/Options";
import Items from './components/Items';
import Carrito from "./components/CarritoItem";


function App() {


  return (
    <div>
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <Brand />
    <Options />

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
      <li class="nav-item">
          <Items Name="Productos"/>
        </li>
        <li class="nav-item">
          <Items Name="Ofertas"/>
        </li>
        <li class="nav-item">
          <Items Name="Carrito"/>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"/></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <Carrito/>
    </div>
  </div>
</nav>
    </div>
  );
}


export default App;
