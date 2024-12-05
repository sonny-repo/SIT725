var express = require('express');
var app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
var port = process.env.port || 3000;


//404 Not Found
app.get("/:universalURL", (req, res) => {
    res.send("404 URL NOT FOUND");
});


app.listen(port,()=>{
console.log("App listening to: "+port)
})
