import { Router } from "express";
import { methods as usuariosController } from "../controllers/usuarios.controller";

const router = Router();


router.get("/getUsuarios", usuariosController.getUsuarios);
router.get("/getIdUsuarios", usuariosController.getIdUsuarios);
router.post("/addUsuarios", usuariosController.addUsuario);
router.put("/updateUsuarios", usuariosController.updateUsuario);
router.delete("/deleteUsuarios", usuariosController.deleteUsuario);


export default router