const url = "https://cooper-production.up.railway.app/";

function abrirDialogo (id){
    document.getElementById(id).showModal()
}

function cerrarDialogo (id){
    document.getElementById(id).close()
}



function graficar(ctxid, labelp, labelsp, datap) {
    let ctx = document.getElementById(ctxid).getContext('2d');
    var obj = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labelsp,
            datasets: [{
                label: labelp,
                data: datap,
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}


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