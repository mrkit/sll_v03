const S = require('sequelize'),
      conn = new S('postgres://localhost/loginTestReact', { logging: false, operatorsAliases: false });

module.exports = conn;