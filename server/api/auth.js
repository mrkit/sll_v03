const r = require('express').Router(),
      jwt = require('jsonwebtoken'),
      UsersSll = require('../db').models.UsersSll,
      { jwt_password } = require('../../assets/.env');

r.post('/signup', (req, res, next) => {
  const { username, password } = req.body;
  console.log('HELLO', username, password);
  UsersSll.create({ username, password })
  .then(user => res.send(createToken(user)))
  .catch(next);
});

r.post('/login', (req, res, next) => {
  const { username, password } = req.body;
  
  UsersSll.findOne({ where: { username }})
  .then(user => {
    if(user){
      UsersSll.isValidPassword(password)
      .then(correctPW => {
        correctPW ?
          res.send(createToken(user)) :
          res.status(401).res('Wrong Password!');
      })
    } else {
      res.status(401).res('Username does not exist');
    }
  })
});

//Protected Routes
r.use(verifyToken);

r.get('/secret', (req, res, next) => {
  res.send('You made it to the secret');
});

//Helper Functions
function createToken(user){
  return jwt.sign({id: user.id, username: user.username}, jwt_password, {expiresIn: '1h'});
}

function verifyToken(req, res, next){
  console.log(req.headers)
  if(req.headers.authorization){
    const token = req.headers.authorization.split(' ')[1];
    jwt.verify(token, jwt_password, function(err, user){
      console.log('Token verified - how to send this sucker?', user);
      next();
    });
  } else {
    res.status(403).send('No header');
  }
}

module.exports = r;