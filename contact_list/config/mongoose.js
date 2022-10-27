// // const mongoose = require('mongoose');

// // mongoose.connect("mongodb://localhost/contact_list_db");

// // const db = mongoose.connection;

// // db.on('error',console.error.bind(console,'Error connecting to db'));

// // db.once('open',function(){
// //     console.log('Connected to db : Mongo');
// // });

// // module.exports = db;







// //Require the library
// const mongoose = require('mongoose');

// //Connect to the database
// mongoose.connect('mongodb://127.0.0.1:27017/contact_list');

// //acquire the connecting (to check if it is successful)
// const db = mongoose.connection;

// //erroe
// db.on('error',console.error.bind(console,'Error connecting to db'));


// //up and running then print the message // gomed 

// db.once('open', function(){

//     console.log('Successfully Connected to the database');

// });
// module.exports = db;


// const mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost:27017/test1');

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));


// const mongoose = require('mongoose');

// mongoose.connect('mongodb://localhost://codial_development');

// const db = mongoose.connection;

// db.on('error',console.error.bind('error in connecting to mongodb'));

// db.once('open',function(){
//     console.log('connected to database :: mmongodb');
// });

// module.exports=db; 


const mongoose = require('mongoose');
//fill your database name here

mongoose.connect(
  'mongodb+srv://ujawal:hum123@cluster0.ymvbele.mongodb.net/contact_list?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

const db = mongoose.connection;

db.on('error', console.error.bind('console', 'error'));

db.once('open', function () {
  console.log('welcome connect to database');
});
module.exports=db;