const { MongoClient, ServerApiVersion } = require('mongodb');
const config = require('./config.js');
const uri = config.mongodb_uri;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const dbInit = async () => {
  try {
    await client.connect();
    console.log("Database connected successfully");
  } catch (err) {
    console.error(`we encountered ${err}`);
  }
}

const dbClient = () => {
  return client;
}

module.exports = { dbInit, dbClient };
