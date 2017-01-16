const express = require ('express');
const app = express();

app.get('/', function(req, res, next){
  res.send('Welcome to the twitter app\n');
})

app.listen(3000, function(){
  console.log('Listening on port 3000');
})

