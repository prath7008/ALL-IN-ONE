//CRUD Create read update delete

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const ObjectID = mongodb.ObjectId;

// const {MongoClient,ObjectID} = require('mongodb')

const id = new ObjectID();
console.log(id);
console.log(id.getTimestamp());
const connectionURL = "mongodb://127.0.0.1:27017";
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL,
  { useNewUrlParser: true },
  (error, client) => {
    if (error) {
      console.log("Unable to connect to database");
    }
    // console.log("Connected Correctly");

    const db = client.db(databaseName);
  }
);
