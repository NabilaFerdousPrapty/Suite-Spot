// Import the MongoClient class from the "mongodb" package
import { MongoClient } from "mongodb";

// Check if the MONGODB_URI environment variable is defined
if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

// MongoDB connection string from environment variables
const uri = process.env.MONGODB_URI;

// MongoDB client options
const options = {};

// Declare a variable for the MongoClient instance and the connection promise
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Check the environment mode to handle connection differently for development and production
if (process.env.NODE_ENV === "development") {
  /**
   * In development mode, use a global variable to preserve the MongoDB client connection
   * across server restarts or hot reloads in a development environment.
   */
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    // If the global MongoDB client promise does not exist, create a new connection
    client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }

  // Assign the global MongoDB client promise to the clientPromise variable
  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  /**
   * In production mode, create a new MongoDB client for every request.
   * This ensures a clean and consistent connection environment in production.
   */
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export the clientPromise to be used throughout the application
export default clientPromise;
