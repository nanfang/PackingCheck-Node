const express = require('express');
const packsController = require('../controller/packs');
const router = express.Router();

// GET /v1/packs
router.get('/packs', packsController.getPacks);
router.post('/packs', packsController.createPack);
router.delete('/packs/:packId', packsController.removePack);
router.get('/packs/:packId/items', packsController.getPackItems);
router.post('/packs/:packId/items', packsController.addPackItem);

module.exports = router;