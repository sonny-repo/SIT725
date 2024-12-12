let collection = require('../models/item');

const postItem = (req,res) => {
    let item = req.body;
    collection.postItem(item, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllItems = (req,res) => {
    collection.getAllItems((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

const deleteItem = (req,res) => {
    let cat = req.body;
    collection.deleteOne(cat, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = {postItem, getAllItems}