import express from 'express'
import morgan from 'morgan'

// Routes
import usuariosRoutes from './routes/usuarios.routes';
import actividadesRoutes from './routes/actividades.routes';
import horarios from './routes/horarios.routes';
import roles from './routes/roles.routes';
import coordinaciones from './routes/coordinaciones.routes';
import cargos from './routes/cargos.routes';



const app = express();
//const cors = require("cors")

// settings

app.set("port", process.env.PORT || 7000)

// middlewares
app.use(morgan("dev"));
app.use(express.json())
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE'),
    res.header('Access-Control-Allow-Headers', 'Content-Type')
    next();
})

//Routes
app.use("/",usuariosRoutes)
app.use("/",actividadesRoutes)
app.use("/",horarios)
app.use("/",roles)
app.use("/",coordinaciones)
app.use("/",cargos)



export default app;