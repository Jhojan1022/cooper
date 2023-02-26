const url = "http://localhost:4000/";

async function dta(t) {
    const url = "http://localhost:4000/" + t;
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function user(t) {
    const pokemonData = await dta(t);
    for (let index = 0; index < pokemonData.length; index++) {
        console.log(pokemonData[0].nombre)
    }
}


