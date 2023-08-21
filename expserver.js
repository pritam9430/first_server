const express = require("express");
const app = express();
app.get("/", function(req, res){
    res.send("welcome to My Duniya");  
})
app.get ("/about", function(req, res){
    res.send("HI my name is pritam mishra :, i am a software developer)")
});
app.get("/contact" , function(req, res){
    res.send("so my contact no is 9470806003");
})

app.get("/calculator" , function(req, res){
    res.sendFile(__dirname+"/index.html");
})
app.post("/calculator", function(req, res){
    res.send("<h3>ho gys gyse </h3>")
})
app.listen(3000, function(req, res){
    console.log("surver is running in port no 3000 ")
});

