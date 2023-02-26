import { Router } from "express";
import { methods as coordinacionesController } from "../controllers/coordinaciones.controller";

const router = Router();


router.get("/getcoordinaciones", coordinacionesController.getCoordinaciones);
router.post("/addcoordinaciones", coordinacionesController.addCoordinacion);
router.put("/updatecoordinaciones", coordinacionesController.updateCoordinacion);
router.delete("/deletecoordinaciones", coordinacionesController.deleteCoordinacion);


export default router