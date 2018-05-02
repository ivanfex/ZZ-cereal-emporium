const app = require('./server');
const { db } = require('./db');

db.sync()
    .then(() => {
        app.listen(3000, ()=>{console.log('Double Z Cereal Emporium open for business')});
    });