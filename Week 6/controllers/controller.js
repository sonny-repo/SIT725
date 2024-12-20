let collection = require('../models/blog');

const postBlog = (req,res) => {
    console.log("controller.js - postBlog")
    let item = req.body;
    collection.postBlog(item, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

const getAllBlogs = (req,res) => {
    console.log("controller.js - getAllBlogs")
    collection.getAllBlogs((error,result)=>{
        if (!error) {
            res.json({statusCode:200,data:result,message:'success'});
        }
    });
}

const deleteItem = (req,res) => {
    let item = req.body;
    collection.deleteOne(item, (err,result) => {
        if (!err) {
            res.json({statusCode:201,data:result,message:'success'});
        }
    });
}

module.exports = {postBlog, getAllBlogs, deleteItem}