import express from "express";
import usuarios from "./usuariosRoutes.js";

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send
    ("Ms Usuários de Pé"));

    app.use(express.json(), usuarios)

};

export default routes;