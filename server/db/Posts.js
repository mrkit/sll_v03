const conn = require('./conn'),
S = conn.Sequelize;

const Posts = conn.define('sllpost', {
  title : S.STRING,
  date: S.STRING,
  author: S.STRING,
  article: S.TEXT
});

module.exports = Posts;
