const poke_url = `https://pokeapi.co/api/v2`;

export const pokeList = (limit = 30, offset= 0)=>{

    return fetch (`${poke_url}/pokemon?limit=${limit}&offset=${offset}`);

}

export const pokeapiName = (name) => {
    return fetch(`${poke_url}/pokemon/${name}`);
  }