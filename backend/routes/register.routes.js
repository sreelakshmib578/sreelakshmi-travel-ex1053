const express = require('express');
const router = express.Router();
const RegisterController = require("../controller/register.controller");

router.post('/', RegisterController.register);

module.exports = router;
