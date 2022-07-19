const { Cursos } = require("../models");
const cursosController = {
    async listarCursos(req, res) {
        const listaDeCursos = await Cursos.findAll();
        res.status(200).json(listaDeCursos);
    },
};

module.exports = cursosController;