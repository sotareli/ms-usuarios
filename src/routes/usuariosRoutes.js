import express from "express";
import usuarioController from "../controllers/usuarioController.js";

const routes = express.Router();

routes.get("/usuarios", usuarioController.listarUsuarios);
routes.get("/usuarios/:id", usuarioController.listarUsuarioPorId);
routes.post("/usuarios", usuarioController.cadastrarUsuario);
routes.post("/usuarios/login", usuarioController.login);
routes.put("/usuarios/:id", usuarioController.atualizarUsuario);
routes.delete("/usuarios/:id", usuarioController.excluirUsuario);

export default routes;
