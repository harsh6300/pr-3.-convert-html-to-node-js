const { log } = require('console');
const express = require('express');

const port = 1000;
const path = require('path')
const app = express();

app.use(express.urlencoded());

app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'/public')));

app.get('/',(req,res)=>{
    return res.render('index')
})
app.get('/profile',(req,res)=>{
    return res.render('profile')
})
app.get('/sign-in',(req,res)=>{
    return res.render('sign-in')
})
app.get('/sign-up',(req,res)=>{
    return res.render('sign-up')
})
app.get('/blank',(req,res)=>{
    return res.render('blank')
})
app.get('/buttons',(req,res)=>{
    return res.render('buttons')
})
app.get('/forms',(req,res)=>{
    return res.render('forms')
})
app.get('/cards',(req,res)=>{
    return res.render('cards')
})
app.get('/feather',(req,res)=>{
    return res.render('feather')
})
app.get('/typography',(req,res)=>{
    return res.render('typography')
})
app.get('/charts',(req,res)=>{
    return res.render('charts')
})
app.get('/maps',(req,res)=>{
    return res.render('maps')
})
app.listen(port,(err)=>{
    if(err){
        console.log("server is not started");
        return false;
    }
    console.log(`server is started on port :- ${port}`);
})