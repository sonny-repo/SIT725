let express = require('express');
let app = express();
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb://localhost:27017/sit725";


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

//Week 4 - Add a Database
 
async function insertData() {
    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB server
        await client.connect();
 
        // Access the database and collection
        const db = client.db("myDB");
        const collection = db.collection("pizzaMenu");
 
        const pizzas = [
            { name: "Margherita", ingredients: ["tomato", "mozzarella", "basil"], price: 8.99 },
            { name: "Pepperoni", ingredients: ["tomato", "mozzarella", "pepperoni"], price: 9.99 },
            { name: "Veggie Supreme", ingredients: ["tomato", "bell peppers", "onion", "olives"], price: 10.49 }
        ];
       
 
        // Insert the data
        const result = await collection.insertMany(pizzas);
        console.log(`${result.insertedCount} documents inserted:`, result.insertedIds);
    } catch (err) {
        console.error('Error inserting data:', err);
    } finally {
        // Close the connection
        await client.close();
    }
}
 
 
async function fetchAllData() {
    const client = new MongoClient(uri);
 
    try {
        // Connect to the MongoDB server
        await client.connect();
 
        // Access the database and collection
        const db = client.db("myDB");
        const collection = db.collection("pizzaMenu");
 
        // Fetch all documents from the collection
        const data = await collection.find().toArray();
 
        // Print the data
        console.log(data);
    } catch (err) {
        console.error('Error fetching data:', err);
    } finally {
        // Close the connection
        await client.close();
    }
}
 
// Run the function
insertData();
// Run the function
fetchAllData();

//404 Not Found
app.get("/:universalURL", (req, res) => {
    res.send("404 URL NOT FOUND");
});


app.listen(port,()=>{
console.log("App listening to: "+port)
})