import dotenv from 'dotenv';
dotenv.config();
import mysql from 'mysql2';

const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME || 'blog'
});

connection.connect((err) => {
    if (err) {
        console.error('Errore durante la connessione al database:', err);
        return;
    } else {
        console.log('Connesso al db con ID:', connection.threadId);
    }
});

export default connection;