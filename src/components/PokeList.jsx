/* import { useState, useEffect } from "react"
import { Catalogo } from "../services/pokeapi"


export const Pokemons = () => {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        pokeList()
            .then((data) => data.json())
            .then((data) => setPokemons(data.results));
    }, []);
    console.log(pokemons)

    return (
        <div>
            <h2>Catalogo</h2>
            <ul>
                {pokemons.map((pokemon) => (
                    <li key={pokemon.name}>
                        <a href={`/pokemon/${pokemon.name}`}>{pokemon.name}</a>
                        
                    </li>
                ))}
            </ul>
        </div>
    )
} */