import Brand from "./Brand";
import Carrito from "./Carrito";
import Items from "./Items";
import Options from "./Options";

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))

 const Layout = ()=>{
            return (

                <nav className="navbar navbar-expand-lg bg-body-tertiary">
                  
                  <div className="container-fluid">
                    <Brand />
                    <Options />
          
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                          <Items Name="Productos" />
                        </li>
                        <li className="nav-item">
                          <Items Name="Ofertas" />
                        </li>
                        <li className="nav-item">
                          <Items Name="Carrito" />
                        </li>
                        <li className="nav-item dropdown">
                          <a href="#" className="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Categorias
                          </a>
                          <ul className="dropdown-menu">
                            <li><a href="#" className="dropdown-item">Ropa</a></li>
                            <li><a href="#"className="dropdown-item">Calzado</a></li>
                          </ul>
                        </li>
                      </ul>
                      <Carrito />
                    </div>
                  </div>
                </nav>
          
            );
          }

          export default Layout