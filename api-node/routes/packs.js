const express = require('express');
const packsController = require('../controller/packs');
const router = express.Router();

// GET /v1/packs
router.get('/packs', packsController.getPacks)

module.exports = router;