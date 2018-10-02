const S = require('sequelize'),
      conn = new S('postgres://localhost/sllv03', { logging: false, operatorsAliases: false });

module.exports = conn;