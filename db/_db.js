const Sequelize = require('sequelize');

const db = new Sequelize('postgres://localhost:5432/cereal_emporium', {logging: false});

module.exports = db;