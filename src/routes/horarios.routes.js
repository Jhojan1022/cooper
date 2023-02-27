import { Router } from "express";
import { methods as horariosController } from "../controllers/horarios.controller.js";

const router = Router();


router.get("/getHorarios", horariosController.getHorarios);
router.get("/getSeguimientoHorarios", horariosController.getSeguimientoHorarios);
router.post("/addHorarios", horariosController.addHorario);
router.put("/updateHorarios", horariosController.updateHorario);
router.delete("/deleteHorarios", horariosController.deleteHorario);
router.post("/registrarIngreso", horariosController.registrarIngreso);
router.put("/registrarSalida", horariosController.registrarSalida);
router.get("/getSeguimiento_horarios", horariosController.getSeguimiento_horarios);


export default router