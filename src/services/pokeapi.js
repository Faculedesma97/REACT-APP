const fakeStore = 'https://fakestoreapi.com/products';

export const catalogo = ()=>{

    fetch(fakeStore)
    .then(res=>res.json())
    .then(json=>console.log(json))

}
