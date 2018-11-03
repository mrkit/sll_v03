const conn = require('./conn'),
      UsersSll = require('./UsersSll'),
      Posts = require('./Posts'),
      Contact = require('./Contact');

module.exports = {
  conn,
  models: {
    UsersSll, Contact, Posts
  }
}