let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');
// let path = require('path');

router.post('/', function(req,res){
    console.log("router.js - postBlog ")
    controller.postBlog(req,res);
});

router.get('/', (req,res)=>{
    console.log("router.js - getAllBlogs ")
    controller.getAllBlogs(req,res);
});

router.delete('/', (req,res)=>{
    console.log("router.js - getAllBlogs - delete")
    controller.getAllBlogs(req,res);
});


module.exports = router;