const path = require('path');
const db = require('../../database/models');

const genresAPIController = {
    'list': async (req, res) => {
        try {
            const generos = await db.Genero.findAll();
            res.status(200).json({
                ok: true,
                total: generos.length,
                data: generos
            });
        } catch (error) {
            return res.status(500).json({
                ok: false,
                msg: error.message
            });
        }
    },
    'detail': async (req, res) => {
        try {
            const genero = await db.Genero.findByPk(req.params.id);
            res.status(200).json({
                ok: true,
                data: genero
            });
        } catch (error) {
            return res.status(500).json({
                ok: false,
                msg: error.message
            });
        }
    },
    'genreMovies': async (req, res) => {
        try {
            const genero = await db.Genero.findByPk(req.params.id);
            const movies = await genero.getMovies();
            res.status(200).json({
                ok: true,
                data: movies
            });
        } catch (error) {
            return res.status(500).json({
                ok: false,
                msg: error.message
            });
        }
    }
}
module.exports = genresAPIController;