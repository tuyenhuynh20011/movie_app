const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const cors=require('cors');


const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const routerMovies = require('./routes/movie')

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors())

app.use(express.json());


  app.use(routerMovies)
// app.use((req,res,next)=>{
//     res.setHeader('Access-Control-Allow-Origin','*');
//     res.setHeader('Access-Control-Allow-Methods','GET,POST,PUT,PATCH,DELETE');
//     res.setHeader('Access-Control-Allow-Methods','Content-Type','Authorization');
//     next(); 
// },(routerMovies))

app.listen(3001)
