import { Router } from "express";
import { methods as actividadesController } from "../controllers/actividades.controller";

const router = Router();


router.get("/getActividades", actividadesController.getActividades);
router.get("/getActividades_coordinacion", actividadesController.getActividades_coordinacion);
router.get("/getActividadesUsuario", actividadesController.getActividadesUsuario);
router.post("/addActividades", actividadesController.addActividades);
router.post("/addActividades_coordinacion", actividadesController.addActividades_coordinacion);
router.post("/iniciarActividad", actividadesController.IniciarActividad);
router.put("/updateActividades", actividadesController.updateActividades);
router.put("/finalizarActividad", actividadesController.finalizarActividad);
router.delete("/deleteActividades", actividadesController.deleteActividades);
router.delete("/deleteActividades_coordinacion", actividadesController.deleteActividades_coordinacion);

export default router