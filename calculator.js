const express = require("express");
const bodyParser = require('body-parser');

const app = express();
app.use(express.urlencoded({ extended: true }));


app.get("/",function (req, res) {
    res.sendFile(__dirname + "/index.html");
})

app.post("/", function (req, res){
    var num1 = Number(req.body.n1);
    var num2 = Number(req.body.n2);
    var result = num1 + num2;
    res.send("Your number is " + result);
})

app.get("/bmicalculator",function (req, res) {
    res.sendFile(__dirname + "/bmiCalculator.html");
})

app.post("/bmicalculator", function (req, res){
    var peso = Number(req.body.weight);
    var altura = Number(req.body.height);
    var resultBmi = Number(Math.round((peso / (altura*altura))));
    res.send("Seu BMI é aproximadamente " + resultBmi);
})


app.get("/contact",function (req, res) {
    res.send("joaosilva@gmail.com");
})

app.listen(2048, function(){
    console.log("Working!");
})