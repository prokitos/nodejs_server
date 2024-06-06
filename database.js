const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('db.db');

db.run(`CREATE TABLE IF NOT EXIST users (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)`);

