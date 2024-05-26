const path = require('path');
const db = require('../../database/models');
const { asIs } = require('sequelize');

const albumesAPIController = {
    'list': async (req, res) => {
        try {
            const albumes = await db.Album.findAll();
            res.status(200).json({
                ok: true,
                total: albumes.length,
                data: albumes
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
            const album = await db.Album.findByPk(req.params.id);
            res.status(200).json({
                ok: true,
                data: album
            });
        } catch (error) {
            return res.status(500).json({
                ok: false,
                msg: error.message
            });
        }
    }
}

module.exports = albumesAPIController;