const Sequelize = require('sequelize');
const db = require('../config/database');

const Login = db.define('login', {
    l_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_type: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});


module.exports = Login;