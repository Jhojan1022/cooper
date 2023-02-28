const timestamp = new Date()

seguimientoHorarios()
coordinacionesForm()
cargosForm()
actividadesForm()



async function seguimientoHorarios(t) {
    const response = await fetch(url + "getSeguimientoHorarios");
    const data = await response.json();
    //console.table(data)
    //console.table(data[data.length - 1])
    const fecha_ingreso = new Date(data[data.length - 1].fecha_ingreso)
    const fecha_salida = new Date(data[data.length - 1].fecha_salida)

    //console.log(fecha_ingreso.getMonth() + 1)
    //console.log(fecha_salida)

    document.getElementById("ingreso").innerHTML = "Ultima fecha de ingreso: " + fecha_ingreso.getFullYear() + "-" + (fecha_ingreso.getMonth() + 1) + "-" + fecha_ingreso.getDate() + " " + fecha_ingreso.getHours() + ":" + fecha_ingreso.getMinutes()
    if ((data[data.length - 1].fecha_salida == null)) {
        document.getElementById("salida").innerHTML = "Ultima fecha de salida: -";
    } else {
        document.getElementById("salida").innerHTML = "Ultima fecha de salida: " + fecha_salida.getFullYear() + "-" + fecha_salida.getMonth() + " - " + fecha_salida.getDate() + " " + fecha_salida.getHours() + ":" + fecha_salida.getMinutes()
    }
    return data;
}

function registrarIngreso() {

    try {
        fetch(url + "registrarIngreso", {
            method: 'POST',
            body: JSON.stringify({
                "id": sessionStorage.getItem("id"),
                "inicio": timestamp.getFullYear() + "-" + (timestamp.getMonth() + 1) + "-" + timestamp.getDate() + " " + timestamp.getHours() + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds()
            }),
            headers: { "Content-Type": "application/json" }
        })
        alert("Registro de ingreso exitoso")
    } catch (error) {
        alert("Ocurrió un error")
    }
    seguimientoHorarios()

}

function registrarSalida() {

    if (confirm("¿Está segur@ de confirmar su salida laboral?")) {
        try {
            fetch(url + "registrarSalida", {
                method: 'PUT',
                body: JSON.stringify({
                    "id": sessionStorage.getItem("id"),
                    "fin": timestamp.getFullYear() + "-" + (timestamp.getMonth() + 1) + "-" + timestamp.getDate() + " " + timestamp.getHours() + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds()
                }),
                headers: { "Content-Type": "application/json" }
            })
            alert("Registro de salida exitoso")
        } catch (error) {
            alert("Ocurrió un error")
        }
    }
    seguimientoHorarios()

}

async function coordinacionesForm() {
    const response = await fetch(url + "getCoordinaciones");
    const data = await response.json();


    for (let index = 0; index < data.length; index++) {
        const html = '<option value="' + data[index].id_coordinacion + '">' + data[index].nombre_coordinacion + '</option>';
        document.getElementById("coordinaciones").innerHTML += html;
    }
}

async function cargosForm() {
    const response = await fetch(url + "getCargos");
    const data = await response.json();


    for (let index = 0; index < data.length; index++) {
        const html = '<option value="' + data[index].id_cargo + '">' + data[index].nombre_cargo + '</option>';
        document.getElementById("cargos").innerHTML += html;
    }
}

async function actividadesForm() {
    const response = await fetch(url + "getActividades");
    const data = await response.json();


    for (let index = 0; index < data.length; index++) {
        const html = '<option value="' + data[index].id_actividad + '">' + data[index].nombre_actividad + '</option>';
        document.getElementById("actividades").innerHTML += html;
    }
}

function IniciarActividad() {
    //id_usuario, id_actividad, inicio, descripcion
    console.log(sessionStorage.getItem("id"))
    console.log(document.getElementById("actividades").value)
    console.log(timestamp.getFullYear() + "-" + (timestamp.getMonth() + 1) + "-" + timestamp.getDate() + " " + timestamp.getHours() + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds())

    try {
        fetch(url + "iniciarActividad", {
            method: 'POST',
            body: JSON.stringify({
                "id_usuario": sessionStorage.getItem("id"),
                "id_actividad": Number(document.getElementById("actividades").value),
                "inicio": timestamp.getFullYear() + "-" + (timestamp.getMonth() + 1) + "-" + timestamp.getDate() + " " + timestamp.getHours() + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds(),
                "descripcion": ""
            }),
            headers: { "Content-Type": "application/json" }
        })
        alert("Registro actividad exitoso")
        getActividadesUsuario()
    } catch (error) {
        alert("Ocurrió un error")
    }
}

function updateTime(d, e) {
    // Obtiene la fecha actual y la fecha pasada como parámetro
    var now = new Date();
    var startDate = new Date(d);

    // Calcula la diferencia entre las fechas en milisegundos
    var difference = now - startDate;

    // Convierte la diferencia en segundos
    var seconds = Math.floor(difference / 1000);

    // Calcula los minutos, horas y días a partir de los segundos
    var minutes = Math.floor(seconds / 60);
    var hours = Math.floor(minutes / 60);
    var days = Math.floor(hours / 24);

    // Calcula los valores restantes después de obtener los días
    hours %= 24;
    minutes %= 60;
    seconds %= 60;

    // Agrega ceros a la izquierda si los valores son menores a 10
    hours = hours < 10 ? "0" + hours : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    // Actualiza el texto en el elemento con el id "timer"
    document.getElementById(e).innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s";
    //console.log(days + "d " + hours + "h " + minutes + "m " + seconds + "s")
    // Espera un segundo y llama de nuevo a la función
    //setTimeout(updateTime(d), 1000);
}



async function getActividadesUsuario() {
    const response = await fetch(url + "getActividadesUsuario");
    const data = await response.json();
    const divActividades = document.getElementById("actividadesUsuarioTable");
    divActividades.innerHTML = "<tr><th>Nombre actividad</th><th>Fecha inicio</th><th>Duración</th><th>Acción</th></tr>";

    for (let index = 0; index < data.length; index++) {
        console.log(sessionStorage.getItem("id"))
        console.log(data[index].usuarios_id_usuario)
        if (sessionStorage.getItem("id") == data[index].usuarios_id_usuario) {
            const dateFormat = new Date(data[index].fecha_inicio);

            const html = '<tr><td>' + data[index].nombre_actividad + '</td><td>' + dateFormat.getFullYear()+"-"+dateFormat.getMonth()+"-" +dateFormat.getDate()+" " + dateFormat.getHours()+":"+dateFormat.getMinutes()+":" + dateFormat.getSeconds()+ '</td><td id="act' + index + '">' + data[index].fecha_inicio + '</td><td><button onclick="finalizarActividad(`'+data[index].fecha_inicio+'`)">Finalizar</button></td></tr>'
            divActividades.innerHTML += html;
            setInterval(() => {
                updateTime(data[index].fecha_inicio, "act" + index)
            }, 1000);
        }

    }

    console.log(data)
}

function finalizarActividad (date) {
    console.log("finalizar actividad " + date)
    //finalizarActividad
    try {
        fetch(url + "finalizarActividad", {
            method: 'PUT',
            body: JSON.stringify({
                "id_usuario": sessionStorage.getItem("id"),
                "id_actividad": Number(document.getElementById("actividades").value),
                "inicio": timestamp.getFullYear() + "-" + (timestamp.getMonth() + 1) + "-" + timestamp.getDate() + " " + timestamp.getHours() + ":" + timestamp.getMinutes() + ":" + timestamp.getSeconds(),
                "descripcion": ""
            }),
            headers: { "Content-Type": "application/json" }
        })
        alert("Registro actividad exitoso")
        getActividadesUsuario()
    } catch (error) {
        alert("Ocurrió un error")
    }
}

getActividadesUsuario()


document.getElementById("formActividad").addEventListener("submit", (e) => {
    e.preventDefault();
    IniciarActividad()
})