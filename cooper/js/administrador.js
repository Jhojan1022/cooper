getCoordinaciones()

async function getCoordinaciones() {
    const response = await fetch(url + "getCoordinaciones");
    const data = await response.json();
    const table = document.getElementById("coordinaciones_t");

    for (let index = 0; index < data.length; index++) {
        let html = `<tr><td>`+data[index].id_coordinacion+`</td><td>`+data[index].nombre_coordinacion+`</td><td><button>Actualizar</button>/<button>Eliminar</button></tr>`;
        table.innerHTML += html;
    }
}


function formCrear(html) {
    const modal = document.getElementById("modal");
    modal.innerHTML = html;
}

formCrear(`<br><div>
<h2>Crear usuario</h2>

<form action="" class="formgrid">
    <div>
        <label for="">SOID</label>
        <input type="text">
    </div>
    <div>
        <label for="">Nombres y apellidos</label>
        <input type="text">
    </div>
    <div>
        <label for="">Rol</label>
        <select name="" id="">
            <option value="">Administrador</option>
            <option value="">Colaborador</option>
        </select>
    </div>
    <div>
        <label for="">Cargo</label>
        <input type="text">
    </div>
    <div>
        <label for="">Coordinación</label>
        <input type="text">
    </div>
    <div>
        <label for="">Horario</label>
        <input type="text">
    </div>
    <div>
        <label for="">Contraseña</label>
        <input type="text">
    </div>
    <div>
        <label for="">Confirmar contraseña</label>
        <input type="text">
    </div>
</form>
</div>

<button type="button" onclick="cerrarDialogo('modal')">Cerrar</button>`)