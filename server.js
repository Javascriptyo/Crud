const express = require('express');
const { MongoClient } = require('mongodb');
const uri = "mongodb+srv://zoomdoom:zoomdoom@cluster0.eg7ka.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
    console.log('Works');
});



const app = express();

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log('Server run at port 5000'));