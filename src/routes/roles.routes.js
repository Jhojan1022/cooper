import { Router } from "express";
import { methods as RolesController } from "../controllers/roles.controller.js";

const router = Router();


router.get("/getRoles", RolesController.getRoles);
router.post("/addRoles", RolesController.addRol);
router.put("/updateRoles", RolesController.updateRol);
router.delete("/deleteRoles", RolesController.deleteRol);


export default router