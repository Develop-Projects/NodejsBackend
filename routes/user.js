const express = require('express');
const router = express.Router();

/*
 * CONNECTS THE CONTROLLER TO THE APP/ SERVER
 */

const userCtrl = require('../controller/user')

router.post('/login', userCtrl.login);
router.post('/signup', userCtrl.createAccount);

module.exports = router;