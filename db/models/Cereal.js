const db = require('./../_db');
const Sequelize = require('sequelize');

const Cereal = db.define('cereal',{
    name: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    brand: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    hasMarshmellow: {
        type: Sequelize.BOOLEAN,
        allowNull: true
    }
})

module.exports = Cereal;