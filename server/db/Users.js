const conn = require('./conn'),
      S = conn.Sequelize,
      bcrypt = require('bcrypt');

const Users = conn.define('user', {
  username: {
    type: S.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: S.TEXT,
    allowNull: false
  }
}, {
  hooks: {
    beforeCreate(user){
      return bcrypt.hash(user.password, salt = 12)
      .then(hash => user.password = hash)
      .then(hash => this.password = hash)
      .catch(err => console.log(`Bcrypt Hash error message: ${err.message}`));
    }
  }
});

Users.isValidPassword = function(password){
  return bcrypt.compare(password, this.password)
  .then(correctPW => correctPW)
  .catch(err => console.log(`Bcrypt Compare error message: ${err.message}`));
}

module.exports = Users;