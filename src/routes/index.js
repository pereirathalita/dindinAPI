const express = require("express");
const cursosController = require("../controllers/CursosController");
const routes = express.Router();

routes.get("/cursos", cursosController.listarCursos);
routes.post("/cursos/:id", cursosController.atualizarCursos);

module.exports = routes;