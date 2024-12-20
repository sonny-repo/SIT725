const express = require('express');
let app = express();
let port = process.env.port || 3000;
require('./models/dbConnect');
let router = require('./routers/routers');
// const { Socket } = require('socket.io');
let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use(express.static('public'));
app.use(express.static('views'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use('/api/blog',router);

http.listen(port, ()=>{
    console.log('express server started');
    console.log("App listening to: "+ port)
});

// io.on('connection',(socket)=>{
//     console.log('user connected');

//     setInterval(()=>{
//         x = parseInt(Math.random()*10);
//         socket.emit('number', x);
//         console.log('Emmiting Number '+x);
//     }, 1000)

//     socket.on('disconnect', () => {
//         console.log('user disconnected');
//     });


// });

//404 Not Found
app.get("/:universalURL", (req, res) => {
    res.send("404 URL NOT FOUND");
});

//Week 6 - Testing
app.get('/addTwoNumbers/:firstNumber/:secondNumber', function(req,res,next){
    var firstNumber = parseInt(req.params.firstNumber) 
    var secondNumber = parseInt(req.params.secondNumber)
    var result = firstNumber + secondNumber || null
    if(result == null) {
      res.json({result: result, statusCode: 400}).status(400)
    }
    else { res.json({result: result, statusCode: 200}).status(200) } 
  })