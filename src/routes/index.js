const express = require("express");
const cursosController = require("../controllers/CursosController");
const routes = express.Router();

routes.get("/cursos", cursosController.listarCursos);

module.exports = routes;