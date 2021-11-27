const Sequelize = require('sequelize');
const db = require('../config/database');
const TravelRequests = db.define('travelrequests', {
    req_id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    cause_travel: {
        type: Sequelize.STRING,
        allowNull: false
    },
    source: {
        type: Sequelize.STRING,
        allowNull: false
    },
    destination: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    mode: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    from_date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    to_date: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    no_of_days: {
        type: Sequelize.INTEGER,
        allowNull: false,
    },
    priority: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    project: {
        type: Sequelize.STRING,
        allowNull: false, 
    },
    emp: {
        type: Sequelize.INTEGER,
        allowNull: false,   
    },
    status: {
        type: Sequelize.STRING,
        allowNull: false, 
    }
});
module.exports = TravelRequests;