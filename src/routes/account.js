const express = require('express');
const router = express.Router();

const AccountController = require('../app/controllers/AccountController');

router.get('/login', AccountController.login);
router.get('/register', AccountController.register);
router.get('/logout', AccountController.logout);


module.exports = router;