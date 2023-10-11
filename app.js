
require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(process.env.DATABASE);

app.set('view engine', 'ejs');

app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));



app.get("/",function(req,res){
    res.render("index");
})

app.get("/shopmen",function(req,res){
    res.render("shopmen",{})
})

app.get("/shopwomen",function(req,res){
    res.render("shopwomen");
})

app.get("/shopkid",function(req,res){
    res.render("shopkid");
})

app.get("/shopnow",function(req,res){
    res.render("shopnow");
})

app.get("/cart",function(req,res){
    res.render("cart");
})

app.get("/signup",function(req,res){
    res.render("signup");
})


const pumaSchema = new mongoose.Schema({
    fname : String,
    lname : String,
    email: String
})

const Client = mongoose.model("client",pumaSchema);



app.post("/signup",function(req,res){

    const name = req.body.Fname;
    const last = req.body.Lname;
    const mail = req.body.Email;


    const clientDetail = new Client({
        fname: name,
        lname: last,
        email: mail
    })

    clientDetail.save();

    res.redirect("/");
})




app.listen(3000,function(req,res){
    console.log("This server is running on port 3000");
})