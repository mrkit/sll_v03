const e = require('express'),
      a = e(),
      r = require('path').resolve,
      m = require('morgan'),
      bp = require('body-parser'),
      db = require('./db');

//console.log('Node env', process.env.NODE_ENV);

a.use('/assets', e.static(r(__dirname, 'assets')));
a.use([
  e.static(r(__dirname, '..', 'dist')),
  m('dev'),
  bp.json(),
  bp.urlencoded({ extended: false })
]);

a.use('/api', require('./api'));
a.get('/*', (req, res) => res.sendFile(r(__dirname, '..', 'dist', 'index.html')));

a.use((err, req, res, next) => {
  if(err) {
    console.log(`Catch All Error message: ${err.message}`);
    res.send(err.message);
  }
});

db.conn.sync({ force: true })
.then(() => a.listen(3000, console.log('listening on 3000')));