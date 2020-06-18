const express = require('express'),
      app = express(),
      resolve = require('path').resolve,
      morgan = require('morgan'),
      {json, urlencoded } = require('body-parser'),
      db = require('./db'),
      force = process.env.NODE_ENV === 'development' ? true : false;

app.use('/assets', express.static(resolve(__dirname, '..', 'assets')));
app.use([
  e.static(r(__dirname, '..', 'dist')),
  morgan('dev'),
  json(),
  urlencoded({ extended: false })
]);

app.use('/api', require('./api'));
app.get('/*', (req, res) => res.sendFile(resolve(__dirname, '..', 'dist', 'index.html')));

app.use((err, req, res, next) => {
  if(err) {
    console.error(`Catch All Error message: ${err.message}`);
    res.send(err.message);
  }
});

db.conn.sync({ force })
.then(() => db.models.Users.create({ username: 'luisa', password: 'tokyo' }))  
.then(() => db.models.Posts.create({title: 'Test Title', date:'11/2/2018', author: 'john', article: 'Test post'}))
.then(() => app.listen(3006, console.log('listening on 3006')));
