import { useEffect, useState } from "react";
import { catalogo } from "../services/pokeapi";

export const Productos = () =>{

const [productos, setProductos] = useState([])

useEffect(() =>{
    catalogo()
    .then((data) => data.json())
    .then((data) => setProductos(data.results));
}, []);
console.log(productos)

return (
    <div>
        <h2>Catalogo</h2>
        <ul>
            {productos.map((producto) => (
                <li key={producto.title}>
                    <a href="#">{productos.title}</a>
                </li>
            ))}
        </ul>
    </div>
)

}

