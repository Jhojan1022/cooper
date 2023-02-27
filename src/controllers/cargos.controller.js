import { getConnection } from '../database/database.js'


const getCargos = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM cargos");
        res.json(result)
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }
}


async function addCargo(req, res) {
    try {
        const cargo = req.body.cargo;
        const connection = await getConnection();
        const result = await connection.query('insert into cargos(nombre_cargo) values("'+cargo+'")');
        res.send("Cargo agregado")
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }
}

async function updateCargo(req, res) {
    try {
        const {id, cargo} = req.body;
        const connection = await getConnection();
        const result = await connection.query('update cargos set nombre_cargo = "'+cargo+'" where id_cargo = '+id+'');
        res.send("Cargo actualizado")
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }
}

async function deleteCargo(req, res) {
    try {
        const id = req.body.id;
        const connection = await getConnection();
        const result = await connection.query('delete from cargos where id_cargo = '+id+'');
        res.send("Cargo eliminado")
    } catch {
        res.status(500)
        res.send("Ha ocurrido un error")
    }
}

export const methods = {
    getCargos,
    addCargo,
    updateCargo,
    deleteCargo
}