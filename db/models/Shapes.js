const db = require('./../_db');
const Sequelize = require('sequelize');

const Shapes = db.define('shape', {
    shapeType: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    description: {
        type: Sequelize.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
    getsMushy: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
});

module.exports = Shapes;