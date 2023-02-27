import { getConnection } from '../database/database.js'


const getHorarios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM horarios");
        res.json(result)
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }
}

const getSeguimientoHorarios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("select * from seguimiento_horarios");
        res.json(result)
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }
}


async function addHorario(req, res) {
    const {inicio, fin} = req.body;
    try {
        const connection = await getConnection();
        const result = await connection.query('insert into horarios (hora_ingreso, hora_salida) values("'+inicio+'", "'+fin+'")');
        res.send("Horario agregado");
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }
}

async function updateHorario(req, res) {
    const {id, inicio, fin} = req.body;
    try {
        const connection = await getConnection();
        const result = await connection.query('update horarios set hora_ingreso = "'+inicio+'", hora_salida = "'+fin+'" where id_horarios = '+id+'');
        res.send("Horario actualizado");
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }   
}

async function deleteHorario(req, res) {
    const id = req.body.id;
    try {
        const connection = await getConnection();
        const result = await connection.query('delete from horarios where id_horarios = '+id+'');
        res.send("Horario eliminado");
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }   
}

async function registrarIngreso(req, res) {
    const {id, inicio} = req.body;
    try {
        const connection = await getConnection();
        const result = await connection.query('insert into seguimiento_horarios(fecha_ingreso, usuarios_id_usuario) values("'+inicio+'", "'+id+'")');
        res.send("Registro de ingreso exitoso");
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }   
}

async function registrarSalida(req, res) {
    const {id, fin} = req.body;
    console.log(id)
    console.log(fin)

    try {
        const connection = await getConnection();
        const result = await connection.query('update seguimiento_horarios set fecha_salida = "'+fin+'" where usuarios_id_usuario = "'+id+'" and fecha_salida is null');
        res.send("Registro de salida exitoso");
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }   
}


const getSeguimiento_horarios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM seguimiento_horarios");
        res.json(result)
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }
}





export const methods = {
    getHorarios,
    addHorario,
    updateHorario,
    deleteHorario,
    registrarIngreso,
    registrarSalida,
    getSeguimiento_horarios,
    getSeguimientoHorarios
}