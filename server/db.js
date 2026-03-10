const Database = require('better-sqlite3');
const path = require('path');
const fs = require('fs');

// Use /tmp for SQLite in Cloud Run as the environment is mostly read-only
const dbDir = process.env.NODE_ENV === 'production' ? '/tmp/snapvio' : path.join(__dirname, '../database');
if (!fs.existsSync(dbDir)) {
    try {
        fs.mkdirSync(dbDir, { recursive: true });
    } catch (err) {
        console.error('❌ Failed to create database directory:', err);
    }
}

const db = new Database(path.join(dbDir, 'snapvio.db'));

// Initialize tables
try {
    db.exec(`
        CREATE TABLE IF NOT EXISTS downloads (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            url TEXT,
            platform TEXT,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS feedback (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT,
            email TEXT,
            message TEXT,
            read INTEGER DEFAULT 0,
            created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        );

        CREATE TABLE IF NOT EXISTS admins (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE,
            password TEXT
        );

        CREATE TABLE IF NOT EXISTS flash_offers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT,
            content TEXT,
            link TEXT,
            expires_at DATETIME
        );
    `);
    console.log('✅ SQLite Tables verified/created');
} catch (err) {
    console.error('❌ Error creating SQLite tables:', err);
}

module.exports = db;
