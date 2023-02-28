import { getConnection } from '../database/database.js'


const getActividades = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM actividades");
        res.json(result)
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }
}

const getActividadesUsuario = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("select id_actividad, usuarios_id_usuario, nombre_actividad, fecha_inicio, descripcion_actividad from  usuarios_actividades us inner join actividades a on us.actividades_id_actividad = a.id_actividad where fecha_fin is null");
        res.json(result)
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }
}


async function addActividades(req, res) {

    try {
        const { name, description } = req.body;
        const connection = await getConnection();
        await connection.query('insert into actividades (nombre_actividad, descripción_actividad) values("'+name+'", "'+description+'")');
        res.status(200);
        res.send("Actividad añadida")
    } catch {
        res.status(500);
        res.send("Ha ocurrido un error");
    }
}

async function updateActividades(req, res) {

    try {
        const { id, name, description } = req.body;
        const connection = await getConnection();
        await connection.query('update actividades set nombre_actividad = "'+name+'", descripcion = "'+description+'" where id_actividad = "'+id+'"');
        res.status(200);
        res.send("Actividad actualizada")
    } catch {
        res.status(500);
        res.send("Ha ocurrido un error");
    }
}

async function deleteActividades(req, res) {

    try {
        const id = req.body.id;
        const connection = await getConnection();
        await connection.query('delete from actividades where id_actividad = '+id+'');
        res.status(200);
        res.send("Actividad eliminada")
    } catch {
        res.status(500);
        res.send("Ha ocurrido un error");
    }
}

async function getActividades_coordinacion(req, res) {

    try {
        const id = req.body.id;
        const connection = await getConnection();
        const result = await connection.query('select nombre_actividad, descripción_actividad from actividades_coordinaciones ac inner join usuarios u on u.coordinaciones_id_coordinacion = ac.coordinaciones_id_coordinacion inner join actividades a on id_actividad = ac.actividades_id_actividad where u.id_usuario = "'+id+'"');
        res.json(result)
    } catch {
        res.status(500);
        res.send("Ha ocurrido un error");
    }
}

async function addActividades_coordinacion(req, res) {

    try {
        const {actividad, coordinacion} = req.body;
        const connection = await getConnection();
        const result = await connection.query('INSERT INTO actividades_coordinaciones(actividades_id_actividad, coordinaciones_id_coordinacion) values('+actividad+','+coordinacion+')');
        res.send("Regla añadida")
    } catch {
        res.status(500);
        res.send("Ha ocurrido un error");
    }
}

async function deleteActividades_coordinacion(req, res) {

    try {
        const {id_act, id_coor} = req.body;
        const connection = await getConnection();
        const result = await connection.query('delete from actividades_coordinaciones where actividades_id_actividad = '+id_act+' and coordinaciones_id_coordinacion = '+id_coor+'');
        res.send("Regla eliminada")
    } catch {
        res.status(500);
        res.send("Ha ocurrido un error");
    }
}

async function IniciarActividad(req, res) {

    try {
        const {id_usuario, id_actividad, inicio, descripcion} = req.body;
        console.log(id_usuario)
        console.log(id_actividad)
        console.log(inicio)
        console.log(descripcion)
        const connection = await getConnection();
        const result = await connection.query('insert into usuarios_actividades(usuarios_id_usuario, actividades_id_actividad, fecha_inicio, descripcion_actividad) values("'+id_usuario+'", '+id_actividad+', "'+inicio+'", "'+descripcion+'")');
        res.send("Inicio exitoso de actividad")
    } catch {
        res.status(500);
        res.send("Ha ocurrido un error");
    }
}
async function finalizarActividad(req, res) {

    try {
        const {id_usuario, id_actividad, fin} = req.body;
        const connection = await getConnection();
        const result = await connection.query('update usuarios_actividades set fecha_fin = "'+fin+'" where usuarios_id_usuario = "'+id_usuario+'" and actividades_id_actividad = '+id_actividad+' and fecha_fin is null');
        res.send("Actividad finalizada")
    } catch {
        res.status(500);
        res.send("Ha ocurrido un error");
    }
}

export const methods = {
    getActividades,
    addActividades,
    updateActividades,
    deleteActividades,
    getActividades_coordinacion,
    getActividadesUsuario,
    addActividades_coordinacion,
    deleteActividades_coordinacion,
    IniciarActividad,
    finalizarActividad
}