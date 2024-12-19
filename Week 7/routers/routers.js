let express = require('express');
let router = express.Router();
let controller = require('../controllers/controller');
// let path = require('path');

router.post('/', function(req,res){
    controller.postItem(req,res);
});

router.get('/', (req,res)=>{
    controller.getAllItems(req,res);
});

router.delete('/', (req,res)=>{
    controller.getAllItems(req,res);
});


module.exports = router;