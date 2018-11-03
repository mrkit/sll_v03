const r = require('express').Router();

r.get('/', (req, res, next) => {
  res.send('hello');
});

module.exports = r;