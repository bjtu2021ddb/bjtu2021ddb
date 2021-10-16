import PouchDB from 'pouchdb';
import { KeyPoints } from './KeyPoints';

const dbName = 'KeyPoints';
const NOOP = () => {};

let db = null;

export const createDB = () => {
  db = new PouchDB(dbName);
};

export const closeDB = () => {
  db.close();
};

export const allDocs = (cb = NOOP) => {
  return db.allDocs(
    { include_docs: true, attachments: true },
    (err, docs) => {
      if (!err) cb(docs);
    },
  );
};

export const bulkDocs = () => {
  return db.bulkDocs(KeyPoints);
};

export const getOne = (id, cb = NOOP) => {
  return db.get(id, (err, doc) => {
    if (!err) cb(doc);
  });
};

export const putOne = (doc) => {
  return db.put(doc);
};
