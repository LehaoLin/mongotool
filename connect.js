import { MongoClient, ObjectId } from "mongodb";
import { mongoURI, dbName } from "./config.js";

export const connect = async () => {
  const client = new MongoClient(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  try {
    await client.connect();
    let db = client.db(dbName);
    return { client, db };
  } catch (err) {
    console.error("Error: ", err);
  } finally {
    client.close();
  }
};
