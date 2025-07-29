const express = require('express');
const router = express.Router();
const { handleBfhlPost } = require('../controllers/bfhl.controllers');

router.post('/', handleBfhlPost);

module.exports = router;
