var  express = require('express'); 
var todoController = require ('./controllers/todoController');

var app = express();

//set up template engine

app.set('view-engine','html');

//static files 

app.use(express.static('./public'));

// to do controller
todoController(app);

app.listen(3000);
console.log('you are listening to port 3000');