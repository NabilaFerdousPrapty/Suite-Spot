// Import the MongoClient class from the "mongodb" package
import { MongoClient } from "mongodb";

// Check if the MONGODB_URI environment variable is defined
// If not, throw an error to prevent runtime issues
if (!process.env.MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

// MongoDB connection string from environment variables
const uri = process.env.MONGODB_URI;

// Options object for MongoDB client configuration (can be customized as needed)
const options = {};

// Declare variables for the MongoClient instance and a promise to manage the connection
let client: MongoClient;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  /**
   * In development mode, use a global variable to preserve the MongoDB client connection
   * across server restarts or hot reloads in a development environment.
   */
  let globalWithMongo = global as typeof globalThis & {
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

// Export the clientPromise to be used in other parts of the application
export default clientPromise;
