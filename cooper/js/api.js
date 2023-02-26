function mi_actividad() {
    let optionactivities = document.getElementById("atividad")

    fetch('http://localhost:4000/getActividades')
        .then(response => response.json())
        .then(data => {
            console.log(data); // aquí puedes trabajar con los datos obtenidos
            for (let index = 0; index < data.length; index++) {
                console.log(data[index].nombre_actividad)
                const html = '<option value="' + data[index].id_actividad + '">' + data[index].nombre_actividad + '</option>'
                optionactivities.innerHTML += html
            }
        })
        .catch(error => {
            console.error('Error al obtener los datos:', error);
        });
}