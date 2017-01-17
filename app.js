const express = require ('express');
const app = express();
const volleyBall = require ('volleyball');

// app.use('/', function(req, res, next){
//   console.log(req.method, req.originalUrl);
//   next();
// });

app.use(volleyBall);


app.use('/special', function(req, res, next){
  console.log('you reached the special area');
  next();
});

app.get('/', function(req, res, next){
  res.send('Welcome to the twitter app\n');
})

app.listen(3000, function(){
  console.log('Listening on port 3000');
})

