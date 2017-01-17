const express = require ('express');
const app = express();
const volleyBall = require ('volleyball');
const nunjucks = require ('nunjucks');
const routes = require ('./routes/');
const bodyParser = require('body-parser');
const socketio = require('socket.io');

// Setup
app.set('view engine', 'html');
app.engine('html', nunjucks.render);
nunjucks.configure('views', {noCache: true});
app.use(volleyBall); // Logger
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());


// Routes
app.use('/', routes);

app.use('/special', function(req, res, next){
  console.log('you reached the special area');
  next();
});


// Listen
const server = app.listen(3000, function(){
  console.log('Listening on port 3000');
})

const io = socketio.listen(server);
