const conn = require('./conn'),
      Users = require('./Users'),
      Posts = require('./Posts'),
      Contact = require('./Contact');

module.exports = {
  conn,
  models: {
    Users, Contact, Posts
  }
}