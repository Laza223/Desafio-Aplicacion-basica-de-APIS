const express = require('express');
const router = express.Router();
const albumesAPIController = require('../../controllers/api/albumesAPIController');

//Rutas
//Listado de albumes
router.get('/', albumesAPIController.list);
//Detalle de un album en base a un artista indicado
router.get('/:id', albumesAPIController.detail);

module.exports = router;