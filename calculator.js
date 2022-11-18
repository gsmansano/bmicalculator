
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/", function(req, res){
  var hei = Number(req.body.hei);
  var wei = Number(req.body.wei);
  var result = Math.round(wei / (hei*hei));

  res.send("Your BMI is " + result + ".")
})

app.listen(3000, function(){
  console.log("Server is running.")
});
