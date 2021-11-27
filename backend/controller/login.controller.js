var LoginDao = require("../dao/login.dao")
const jwt = require("jsonwebtoken");
var bcrypt = require('bcryptjs');
var LoginController = {
    login: login
}

async function login(req, res) {
    const login = req.body;
    LoginDao.findUser(login.username)
        .then(async (user) => {
            if (user && (await bcrypt.compare(login.password, user.password))) {
                const token = jwt.sign(
                    { userId: user.emp_id, email: user.username },
                    "sreetoken_12305",
                    {
                      expiresIn: "2h",
                    }
                  );
                  res.status(200).json({
                    status: "success",
                    data: user,
                    token: token
                  })
            } else {
                res.status(401).json({
                    status: "failed",
                    data: "invalid credentials"
                })
            }
        })
        .catch(error => {
            res.status(400).json({
                status: "failed",
                data: error
            })
        })
   
}
module.exports = LoginController;