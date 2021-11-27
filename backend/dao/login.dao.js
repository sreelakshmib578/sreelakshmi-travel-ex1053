const Register = require("../models/register");
var LoginDao = {
    findUser: findUser
}
function findUser(username) {
    return Register.findOne({
        where: {
            username: username
        }
    })
}
module.exports = LoginDao;