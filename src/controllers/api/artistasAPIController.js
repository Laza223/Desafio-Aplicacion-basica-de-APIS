const path = require('path');
const db = require('../../database/models');

const artistasAPIController = {
    'list': async (req, res) => {
        try {
            const artistas = await db.Artista.findAll();
            res.status(200).json({
                ok: true,
                total: artistas.length,
                data: artistas
            });


        } catch (error) {
            return res.status(500).json({
                ok: false,
                msg: error.message
            });
        }
    },
    create: async (req, res) => {
        try {
            const newArtist = await db.Artista.create({
                nombre: req.body.nombre
            });
            res.status(200).json({
                ok: true,
                data: newArtist
            });
        } catch (error) {
            return res.status(500).json({
                ok: false,
                msg: error.message
            });
        }
    },
    update: async (req, res) => {
        try {
            const artist = await db.Artista.findByPk(req.params.id);
            await artist.update({
                nombre: req.body.nombre
            });
            res.status(200).json({
                ok: true,
                data: artist
            });
        } catch (error) {
            return res.status(500).json({
                ok: false,
                msg: error.message
            });
        }
    },
    destroy: async (req, res) => {
        try {
            const artist = await db.Artista.findByPk(req.params.id);
            await artist.destroy();
            res.status(200).json({
                ok: true,
                data: artist
            });
        } catch (error) {
            return res.status(500).json({
                ok: false,
                msg: error.message
            });
        }
    }
}
module.exports = artistasAPIController;