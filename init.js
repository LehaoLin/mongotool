import { MongoClient } from "mongodb";
import { mongoURI } from "./config.js";

async function createDatabaseWithUser() {
  // Connection URL
  const url = "mongodb://adminUser:adminPassword@localhost:27017/admin";

  // Create a new MongoClient
  const client = new MongoClient(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });

  try {
    // Connect to the MongoDB server
    await client.connect();

    console.log("Connected to MongoDB server");

    // Create a new database
    const adminDb = client.db("admin");

    // Create a user in the admin database
    await adminDb.command({
      createUser: "yourUsername",
      pwd: "yourPassword",
      roles: [{ role: "readWrite", db: "yourDatabase" }],
    });

    console.log("User created successfully");
  } catch (error) {
    console.error("Error:", error);
  } finally {
    // Close the client
    await client.close();
    console.log("MongoDB client closed");
  }
}

// Call the function to create the database and user
createDatabaseWithUser();
