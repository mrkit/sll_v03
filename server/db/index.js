const conn = require('./conn'),
      Users = require('./Users'),
      Contact = require('./Contact');

module.exports = {
  conn,
  models: {
    Users, Contact
  }
}