import { MongoClient } from "mongodb";


const mongoUrl = process.env.MONGODB_URI;

let connectDB;

if (process.env.NODE_ENV === 'development') {
  if (!global._mongoClientPromise) {
    global._mongoClientPromise = new MongoClient(mongoUrl).connect();
  }
  connectDB = global._mongoClientPromise;
} else {
  connectDB = new MongoClient(mongoUrl).connect();
}

export { connectDB };