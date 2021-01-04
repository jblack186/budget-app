require('dotenv').config();

import { MongoClient, } from 'mongodb';


/**
 * Global is used here to maintain a cached connection across hot reloads
 * in development. This prevents connections growing exponentiatlly
 * during API Route usage.
 * https://github.com/vercel/next.js/pull/17666
 */

// typescript global Error
const globalAny: any = global;

globalAny.mongo = globalAny.mongo || {};

let indexesCreated = false;


export async function createIndexes(db) {
  await Promise.all([
    db.collection('tokens')
      .createIndex({ expireAt: -1 }, { expireAfterSeconds: 0 }),
    db.collection('users').createIndex({ email: 1 }, { unique: true }),
  ]);
  indexesCreated = true;
  console.log(db);
}

export default async function database(req, res, next) {
  if (!globalAny.mongo.client) {
    globalAny.mongo.client = new MongoClient(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await globalAny.mongo.client.connect();
  }
  req.dbClient = globalAny.mongo.client;
  req.db = globalAny.mongo.client.db(process.env.DB_NAME);
  if (!indexesCreated) await createIndexes(req.db);
  return next();
}