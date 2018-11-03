const r = require('express').Router();
const Posts = require('../db').models.Posts;

r.get('/', (req, res, next) => {
  Posts.findAll()
  .then(posts => res.send(posts))
  .catch(next);
});

r.post('/', (req, res, next) => {
  const { title, date, author, article } = req.body;
  console.log(title, date, author, article);
  Posts.create({title, date, author, article })
  .then(post => res.send(post))
  .catch(next);
});

module.exports = r;