// ============== Always, associated with packages installed ===========//
var express = require('express');
var session = require('express-session');
var path = require('path');

// ============== Second, invokes the express app ===========//
var app = express();

app.use(session({secret: '22'}));

// ============== use static files?? ===========//
app.use(express.static(__dirname + "/static"));

// ============== use style.css ===========//
app.use(express.static(path.join(__dirname, 'static')));



// ============== Setting up ejs and our views folder ===========//
app.set('views',path.join(__dirname, './views'));
app.set('view engine', 'ejs');



// ============== ROUTES here!!! ===========//


var count = 0;

  app.get('/', function(request, response){
      count ++;
      response.render('index',{count:count})
  });

  //using post because a form is invovled for the 'double' button
  app.post('/double', function(request, response){
      count ++;
      response.redirect('/');
  });

//using post because a form is invovled for the 'clear' button
  app.post('/delete', function(request, response){
      count = 0;
      response.redirect('/')
  });



// ==============tell the express app to listen on port 8000===========//
app.listen(8000, function() {
    console.log("listening on port 8000");
   });



// ANOTHER METHOD ===================================================
   //change index.ejs > count.ejs 

   // app.get('/', function(request, response) {
//     if(request.session.counter){
//         request.session.counter++;
//         // response.render('counter');
//         response.render('count', {count: request.session.counter})
//         response.send("<p>You visited this page " + request.session.counter + " times</p>");
//     }else{
//         request.session.counter = 1;
//         response.render('count');
//         response.send("Welcome to this page for the first time!");
//     }
//   })