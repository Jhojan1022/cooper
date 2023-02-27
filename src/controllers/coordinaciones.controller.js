import { getConnection } from '../database/database.js'


const getCoordinaciones = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM coordinaciones");
        res.json(result)
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }
}


async function addCoordinacion(req, res) {
    try {
        const coordinacion = req.body.coordinacion;
        const connection = await getConnection();
        const result = await connection.query('insert into coordinaciones (nombre_coordinacion) values("'+coordinacion+'")');
        res.send("Coordinación agregada")
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }
}

async function updateCoordinacion(req, res) {
    try {
        const {id, coordinacion} = req.body;
        const connection = await getConnection();
        const result = await connection.query('update coordinaciones set nombre_coordinacion = "'+coordinacion+'" where id_coordinacion = '+id+'');
        res.send("Coordinación actualizada")
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }
}

async function deleteCoordinacion(req, res) {
    try {
        const id = req.body.id;
        const connection = await getConnection();
        const result = await connection.query('delete from coordinaciones where id_coordinacion = '+id+'');
        res.send("Coordinación eliminada")
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }   
}




export const methods = {
    getCoordinaciones,
    addCoordinacion,
    updateCoordinacion,
    deleteCoordinacion,
}