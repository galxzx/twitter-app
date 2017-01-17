const express = require ('express');
const app = express();
const volleyBall = require ('volleyball');
const nunjucks = require ('nunjucks');

// app.use('/', function(req, res, next){
//   console.log(req.method, req.originalUrl);
//   next();
// });



// nunjucks.configure('views', {noCache:true});
// nunjucks.render('index.html', locals, function(err, output){
//   if(err) console.error(err);
//   console.log('here', output);
// });

app.set('view engine', 'html'); // have res.render work with html files
app.engine('html', nunjucks.render); // when giving html files to res.render, tell it to use nunjucks
nunjucks.configure('views', {noCache: true}); // point nunjucks to the proper directory for templates



app.use(volleyBall);


app.use('/special', function(req, res, next){
  console.log('you reached the special area');
  next();
});

app.get('/', function(req, res, next){
  const people = [
    {name: 'Full'},
    {name: 'Stacker'},
    {name: 'Son'},
    {name: 'Joe'}
  ];
  res.render(
    'index',
    {
      title: 'Hall of Fame',
      people: people
    }
  );
})

app.listen(3000, function(){
  console.log('Listening on port 3000');
})

