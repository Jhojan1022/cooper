import { Router } from "express";
import { methods as usuariosController } from "../controllers/usuarios.controller.js";

const router = Router();

router.get("/getUsuarios", usuariosController.getUsuarios);
router.get("/getUsuario", usuariosController.getUsuario);
router.get("/getIdUsuarios", usuariosController.getIdUsuarios);
router.post("/addUsuarios", usuariosController.addUsuario);
router.put("/updateUsuarios", usuariosController.updateUsuario);
router.delete("/deleteUsuarios", usuariosController.deleteUsuario);


export default router