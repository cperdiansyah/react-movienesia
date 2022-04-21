import Dexie from 'dexie';

const db = new Dexie('myDatabase');

db.version(1).stores({
  favorites: '++id, title, poster_path, release_date,vote_average', // Primary key and indexed props
});

export default db;
