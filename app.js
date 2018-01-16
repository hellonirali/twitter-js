
const express = require( 'express' );
const app = express();
const routes = require('./routes');
const nunjucks = require('nunjucks');

app.engine('html', nunjucks.render);
app.set('view engine', 'html');
nunjucks.configure('views', {noCache: true});

app.use(express.static('public'));

app.use('/', routes);

app.use('/', (req, res, next) => {
  console.log(`Request Type: ${req.method}`);
  console.log(req.path);
  next();
});

app.get('/', (req, res, next) => res.send("Hello!"));

app.listen(3000, () => console.log("we're listening..."));

// let locals = {
//   title: 'An Example',
//   people: [
//     {name: 'Gandalf'},
//     {name: 'Frodo'},
//     {name: 'Hermione'}
//   ]
// };


// nunjucks.render('index.html', locals, (err, output) => { //refers to the terminal
//   if (err) throw err;
//   console.log(output);
// });


// const people = [{name: 'Full'}, {name: 'Stacker'}, {name: 'Son'}];
// app.get('/views/index.html', (req, res) => res.render( 'index', {title: 'Hall of Fame', people: people})); //referring to the browser
