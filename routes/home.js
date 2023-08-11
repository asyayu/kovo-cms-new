const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');
const { isLoggedIn } = require('../middleware');

router.get('/', homeController.getIndex);
router.get('/kovo', homeController.getKoVo);
router.get('/download', isLoggedIn, homeController.getHTML);

module.exports = router;
