/* import { useState, useEffect } from "react"
import { useParams } from "react-router-dom";
import { pokeapiName } from "../services/pokeapi";

export const PokemonName = () => {

    const [Pokename, setPokename] = useState(null)
    const {pokemonName} = useParams()

    useEffect(() => {
        pokeapiName(pokemonName)
            .then((data) => data.json())
            .then((data) => setPokename(data));
    }, [pokemonName]);

    console.log(Pokename)

    if(!Pokename){
        return (
        <h1>Cargando...</h1>
        )
    }

    return (
        <div className="card" style={{ width: '18rem' }}>
        <img src={Pokename.sprites.other.dream_world.front_default} className="card-img-top" alt={Pokename.name} />
        <div className="card-body">
          <h5 className="card-title">{Pokename.name}</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          <a href="#" className="btn btn-primary">Agregar al carrito</a>
        </div>
      </div>
    )
} */