let express = require('express');
let app = express()


app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Set up the server
var port = process.env.port || 3000;


// // Serve static files from the "public" directory
// app.use(express.static(path.join(__dirname, 'public')));

// // Route to serve the index.html file
// app.get('/', function (req, res) {
//     res.sendFile(path.join(__dirname, 'public', 'index.html'));
// });

//404 Not Found
app.get("/:universalURL", (req, res) => {
    res.send("404 URL NOT FOUND");
});


app.listen(port,()=>{
console.log("App listening to: "+port)
})
