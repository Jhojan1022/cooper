const url = "https://cooper-production.up.railway.app/";

async function dta(t) {
    const response = await fetch(url + t);
    const data = await response.json();
    return data;
}

async function user(t) {
    const pokemonData = await dta(t);
    for (let index = 0; index < pokemonData.length; index++) {
        console.log(pokemonData[0].nombre)
    }
}


