const RegisterDao = require("../dao/register.dao");
var bcrypt = require('bcryptjs');
var RegisterController = {
    register: createAccount
}

async function createAccount(req, res) {
    let employee = req.body;
    var encryptedPassword = await bcrypt.hash(employee.password, 10);
    employee.password = encryptedPassword;
    RegisterDao.register(employee)
        .then((employee) => {
            res.status(200).json({
                status: 'success',
                data: employee
            })
        })
        .catch(error => {
            res.status(400).json({
                status: "failed",
                data: error
            })
        })

}

module.exports = RegisterController;
