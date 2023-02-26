import { getConnection } from '../database/database'


const getUsuarios = async (req, res) => {
    try {
        const connection = await getConnection();
        const result = await connection.query("SELECT * FROM usuarios");
        res.json(result)
    } catch {
        res.status(500)
        res.send(error.message)
    }
}

const getIdUsuarios = async (req, res) => {
    try {
        const id = req.body.id;
        const connection = await getConnection();
        const result = await connection.query('select * from usuarios where id_usuario = "'+id+'"');
        res.json(result)
    } catch {
        res.status(500)
        res.send(error.message)
    }
}


const addUsuario = async (req, res) => {

    try {
        const {id, nombre, contraseña, rol, cargo, coordinacion, horario} = req.body;
        const connection = await getConnection();
        const result = await connection.query('insert into usuarios(id_usuario, nombre, contraseña, rol_id_rol, cargos_id_cargo, coordinaciones_id_coordinacion, horarios_id_horarios) values("'+id+'", "'+nombre+'", "'+contraseña+'", '+rol+', '+cargo+', '+coordinacion+', '+horario+')');
        res.status(200);
        res.send("Usuario creado");
    } catch {
        res.status(500)
        res.send(error.message)
    }
}

const updateUsuario = async (req, res) => {

    try {
        const {id, nombre, contraseña, rol, cargo, coordinacion, horario} = req.body;
        const connection = await getConnection();
        const result = await connection.query('update usuarios set nombre = "'+nombre+'", contraseña = "'+contraseña+'", rol_id_rol = '+rol+', cargos_id_cargo = '+cargo+', coordinaciones_id_coordinacion = '+coordinacion+', horarios_id_horarios = '+horario+' where id_usuario = "'+id+'"');
        res.status(200);
        res.send("Usuario actualizado");
    } catch {
        res.status(500)
        res.send(error.message)
    }
}

const deleteUsuario = async (req, res) => {

    try {
        const id = req.body.id;
        const connection = await getConnection();
        const result = await connection.query('delete from usuarios where id_usuario = "'+id+'"');
        res.status(200);
        res.send("Usuario eliminado");
    } catch {
        res.status(500)
        res.send(error.message)
    }
}

export const methods = {
    getUsuarios,
    addUsuario,
    updateUsuario,
    deleteUsuario,
    getIdUsuarios
}