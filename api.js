import { connect } from "./insert.js";
const { ObjectId } = require("mongodb");

export const insert = async (data, collection_name) => {
  const { db, client } = await connect();
  const collection = db.collection(collection_name);
  await collection.insertOne(data);
  await client.close();
};

export const update = async (data, query, collection_name) => {
  const { db, client } = await connect();
  const collection = db.collection(collection_name);
  await collection.updateOne(
    query,
    { $set: data } // Set the new value
  );
  await client.close();
};

export const query = async (query, collection_name) => {
  const { db, client } = await connect();
  const collection = db.collection(collection_name);

  let results = await collection.find(query).toArray();
  await client.close();
  return results;
};

export const remove = async (query, collection_name) => {
  const { db, client } = await connect();
  const collection = db.collection(collection_name);
  let results = await query(query, collection_name);
  for (let result of results) {
    await collection.deleteOne({ _id: new ObjectId(result._id) });
    console.log(result._id, "deleted");
  }
  await client.close();
};