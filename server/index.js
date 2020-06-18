require('dotenv').config();
const express = require('express'),
      app = express(),
      resolve = require('path').resolve,
      morgan = require('morgan'),
      {json, urlencoded } = require('body-parser'),
      db = require('./db'),
      force = process.env.NODE_ENV === 'development' ? true : false;

app.use('/assets', express.static(resolve(__dirname, '..', 'assets')));
app.use([
  morgan('dev'),
  json(),
  urlencoded({ extended: false })
]);

if(process.env.NODE_ENV == 'development'){
  const webpack = require('webpack'),
        devMiddle = require('webpack-dev-middleware'),
        hotMiddle = require('webpack-hot-middleware'),
        config = require('./configs/webpack.dev.config.js');

        const compiler = webpack(config);

        app.use([
          devMiddle(compiler, { publicPath: config.output.publicPath }),
          hotMiddle(compiler)
        ]);
} else {
  app.use(express.static(r(__dirname, '..', 'dist')))
  app.get('/*', (req, res) => res.sendFile(resolve(__dirname, '..', 'dist', 'index.html')));
}

app.use('/api', require('./api'));

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
