const express = require ('express');
const app = express();
const volleyBall = require ('volleyball');
const nunjucks = require ('nunjucks');
const routes = require ('./routes/');

// Setup
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
app.use(volleyBall); // Logger
app.use(express.static('public'));

// Routes
app.use('/', routes);

app.use('/special', function(req, res, next){
  console.log('you reached the special area');
  next();
});


// Listen
app.listen(3000, function(){
  console.log('Listening on port 3000');
})

