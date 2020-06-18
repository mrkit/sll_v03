const router = require('express').Router();
const Posts = require('../db').models.Posts;

router.get('/', (req, res, next) => {
  Posts.findAll()
  .then(posts => res.send(posts))
  .catch(next);
});

router.post('/', (req, res, next) => {
  const { title, date, author, article } = req.body;
  // console.log(title, date, author, article);
  Posts.create({title, date, author, article })
  .then(post => res.send(post))
  .catch(next);
});

router.put('/:id', (req, res, next) => {
  const id = req.params.id,
        { title, date, author, article } = req.body;
  
  Posts.update({title, date, author, article}, { where: { id }})
  .then(updatedPost => res.send(updatedPost))
  .catch(next);
});

router.delete('/:id', (req, res, next) => {
  const id = req.params.id;

  Posts.destroy({ where: { id }})
  .then(() => res.send(id))
  .catch(next);
});

module.exports = router;