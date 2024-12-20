let client = require('./dbConnect');

let collection = client.db().collection('Items');

function postBlog(item, callback) {
    console.log("item.js - postBlog\n")
    collection.insertOne(item,callback);
}

function getAllBlogs(callback) {
    console.log("item.js - getAllBlogs")
    collection.find({}).toArray(callback);
}

function deleteBlog(item, callback) {
    collection.deleteOne(item, callback);
}

module.exports = {postBlog, getAllBlogs, deleteBlog}