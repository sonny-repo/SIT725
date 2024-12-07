let client = require('../dbConnection');

let collection = client.db().collection('Items');

function postItem(item, callback) {
    collection.insertOne(item,callback);
}

function getAllItems(callback) {
    collection.find({}).toArray(callback);
}

module.exports = {postItem, getAllItems}