var express = require('express');
var port = 8000;
var path = require('path');

const db = require('./config/mongoose');
const Contact = require('./models/contact');


var app = express();


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded());

//Using Middleware
app.use(express.static('assets'));

// //Middleware1
// app.use(function(req,res,next){
//     console.log('Middleware 1 called ');
//     next();
// });

// //Middleware
// app.use(function(req,res,next){
//     console.log('Middleware 2 called ');
//     next();
// });


var contactList = [
    {
        name:"Rahul",
        phone:"9470284718"
    },
    {
        name:"Ujawal",
        phone:"9334155206"
    },
    {
        name:"Tiwari",
        phone:"7519086690"
    }
]



app.get('/', function(req, res){

    Contact.find({}, function(err , contact){
        if(err){console.log('Error in fetching contacts from db');return;}
        return res.render('home',{
            title: "Todo list",
            contact_list: contact
    });
   });
});

app.get('/pratice',function(req, res){

    return res.render('pratice', {
        title: "let's Play"
    });
});

//below lines routes '/create-contact' in home.ejs
app.post('/create-contact',function(req,res){
    // console.log(req.body);
    // console.log(req.body.name);
    // console.log(req.body.phone);
//   contactList.push({
//     name: req.body.name,
//     phone: req.body.phone
Contact.create({
       name: req.body.name,
       phone: req.body.phone
}, function(err, newContact){
    if(err){console.log('error'); return;};
    console.log('*********',newContact);
    return res.redirect('back');
});
//   });
// contactList.push(req.body)
// console.log(contactList);
//   return res.redirect('/');
});

//below lines routes '/create-contact' in home.ejs
app.post('/create-contact',function(req,res){
    
    return res.redirect('/pratice');
});

//For delete a contact
app.get('/delete/:phone',function(req,res){
    //get the query from the url
    let phone = req.params.phone;
    console.log(phone)
    
})

app.listen(port, function(err){

    if(err){console.log('Error is running the server',err);}
    console.log('Yep! My server is running on port ', port);

});