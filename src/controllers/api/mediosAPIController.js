const path = require('path');
const db = require('../../database/models');

const mediosAPIController = {
    'list': async (req, res) => {
        try {
            const medios = await db.Medio.findAll();
            res.status(200).json({
                ok: true,
                total: medios.length,
                data: medios
            });
        } catch (error) {
            return res.status(500).json({
                ok: false,
                msg: error.message
            });
        }
    }
}
module.exports = mediosAPIController;