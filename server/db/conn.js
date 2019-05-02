const Sequelize = require('sequelize');
let conn;

if(process.env.NODE_ENV === 'development'){
  conn = new Sequelize('postgres://localhost/sllv03', { logging:false });  
} else {
  const {db, user, db_password, settings} = require('../../assets/.env.js');
  conn = new Sequelize(db, user, db_password, settings);
}

module.exports = conn;