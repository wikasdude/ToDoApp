var bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
var mongoose = require('mongoose');

//  connect to database
mongoose.connect('mongodb+srv://test:test@cluster0.aalpt.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

// create a schema
var todoSchema= new mongoose.Schema({
    item:String
});

// to Do Model
var Todo= mongoose.model('Todo',todoSchema);
// var itemone = Todo({item:'buy flowers'}).save(function(err){
//     if(err) throw err;
//     console.log('item saved');
// });




//var data =[{item:'get milk'},{item:'walk dog'} ,{item:'kick some coding ass'}];

module.exports= function(app){
app.get('/todo',function(req,res){
    //get data from mongodB and pass it to view
Todo.find({},function(err,data){
    if(err) throw err;
    res.render('todo.ejs' , {todos:data});
});

  
});

app.post('/todo',urlencodedParser,function(req,res){
// get data from view and add it to the mongoDB
   var newTodo = Todo(req.body).save(function(err,data){
   if(err) throw err;
   res.json(data);
   });

//     console.log(req.body);
// data.push(req.body);
//  res.json(data);
});

app.delete('/todo/:item',function(req,res){
   // delte the item from mongoDB
   Todo.find({item: req.params.item.replace(/\-/g," ")}).remove(function(err,data){
       if(err) throw err;
       res.json(data);
   })


//    data = data.filter(function(todo){
//        return todo.item.replace(/ /g,"-")!== req.params.item;
//    });
//     res.json(data);
});
};