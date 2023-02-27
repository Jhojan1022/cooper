import { Router } from "express";
import { methods as CargosController } from "../controllers/cargos.controller.js";

const router = Router();


router.get("/getCargos", CargosController.getCargos);
router.post("/addCargos", CargosController.addCargo);
router.put("/updateCargos", CargosController.updateCargo);
router.delete("/deleteCargos", CargosController.deleteCargo);


export default router