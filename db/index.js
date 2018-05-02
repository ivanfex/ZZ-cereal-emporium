const db = require('./_db');
const Cereal = require('./models/Cereal');
const Shapes = require('./models/Shapes');

Shapes.belongsTo(Cereal);
Cereal.hasMany(Shapes);

module.exports = {
    db,
    Shapes,
    Cereal
}