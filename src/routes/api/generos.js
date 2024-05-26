const express = require('express');
const router = express.Router();
const generosAPIController = require('../../controllers/api/generosAPIController');

//Rutas
//Listado de todos los artistas
router.get('/', generosAPIController.list);
//Detalle del genero
router.get('/:id', generosAPIController.detail);
//Películas por genero
router.get('/:id/movies', generosAPIController.genreMovies);

module.exports = router;