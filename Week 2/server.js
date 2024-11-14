var express = require("express")
var app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;

const addTwoNumber= (n1,n2) => {
    return n1+n2;
}
app.get("/addTwoNumber", (req,res)=>{
    const n1= parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result = addTwoNumber(n1,n2);
    res.json({statuscocde:200, data: result }); 
});

const minusTwoNumber= (n1,n2) => {
    return n1-n2;
}

app.get("/minusTwoNumber", (req,res)=>{
    const n1= parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result = minusTwoNumber(n1,n2);
    res.json({statuscocde:200, data: result }); 
});

const multiplyTwoNumber= (n1,n2) => {
    return n1*n2;
}

app.get("/multiplyTwoNumber", (req,res)=>{
    const n1= parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result = multiplyTwoNumber(n1,n2);
    res.json({statuscocde:200, data: result }); 
});

const divideTwoNumber= (n1,n2) => {
    return n1/n2;
}

app.get("/divideTwoNumber", (req,res)=>{
    const n1= parseInt(req.query.n1);
    const n2=parseInt(req.query.n2);
    const result = divideTwoNumber(n1,n2);
    res.json({statuscocde:200, data: result }); 
});

app.listen(port,()=>{
console.log("App listening to: "+port)
})
