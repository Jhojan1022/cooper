import { getConnection } from '../database/database.js'


const getRoles = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM roles");
        res.json(result)
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }
}


async function addRol(req, res) {
    try {
        const rol = req.body.rol;
        const connection = await getConnection();
        const result = await connection.query('insert into roles(nombre_rol) values("' + rol + '")');
        res.send("Rol agregado")
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }
}

async function updateRol(req, res) {
    try {
        const {id, rol} = req.body;
        const connection = await getConnection();
        const result = await connection.query('update roles set nombre_rol = "'+rol+'" where id_rol = '+id+'');
        res.send("Rol actualizado")
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }
}

async function deleteRol(req, res) {
    try {
        const id = req.body.id;
        const connection = await getConnection();
        const result = await connection.query('delete from roles where id_rol = '+id+'');
        res.send("Rol eliminado")
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }
}

export const methods = {
    getRoles,
    addRol,
    updateRol,
    deleteRol
}