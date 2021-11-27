
const express = require('express');

const router = express.Router();
const registerRoute = require("./register.routes");
const loginRoute = require("./login.routes");
const requestRoute = require("./request.routes");
const auth = require('../controller/auth.controller');

router.use('/register', registerRoute);
router.use('/login', loginRoute);
router.use('/request', auth,requestRoute);

module.exports = router;

