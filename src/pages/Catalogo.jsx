import { useEffect, useState } from "react";
import pokeapi from "../services/pokeapi";

export const POKEMON = ()=>{
const [pokeapi, setPokemons] = useState([])

useEffect(() => {
    pokeapi()
        .then((data) => data.json())
        .then((data) => setPokemons(data.results))
}, [])


return (
<div>
    <h2>Catalogo</h2>
    <ul>
        {pokeapi.map((pokemon) => (
            <li key={pokemon.name}>
                <a href={`/pokemon/${pokemon.name}`}>{pokemon.name}</a>
            </li>
        ))}
    </ul>
</div>
)
}