const Register = require("../models/register");
var RegisterDao = {
    register: createAccount
}


function createAccount(employee) {
    var newEmployee = new Register(employee);
    return newEmployee.save();
}

module.exports = RegisterDao;