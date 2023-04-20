const express = require('express');
const cookieParser = require('cookie-parser');
const mongoose = require("mongoose")
const app = express();
const port = 8000;
const bodyParser = require("body-parser");
// const session = require("express-session");
const db = require('./config/mongoose');
app.use(bodyParser.urlencoded({extended: true}));
app.use(cookieParser());
// app.use(express.static('./assets'));



//use express router
app.use('/', require('./routes'));
//setting view engine
app.set('view engine', 'ejs');
app.set('views', './views');


mongoose.connect("mongodb+srv://dheeraj04dec:1234567890@dheeraj.okqdldu.mongodb.net/dheeraj?retryWrites=true&w=majority").then(()=>{
    app.listen(port , function(err){
        if (err) {
            console.log(`Error in running the server: ${err}`);
        }
        console.log(`Server is running on port: ${port}`);
       }
    );
})

