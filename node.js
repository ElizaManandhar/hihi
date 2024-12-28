const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const mysql = require('mysql');

const app = express();
app.use (bodyParser.urlencoded({ extended: false }));

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'shopy'
});

db.connect((err) => {
    if (err) throw err;
    console.log('Connected to database');
});

app.post('/register', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    bcrypt.hash(password, 10, (err, hash) => {
        if (err) throw err;
        db.query('INSERT INTO users (username, password, email) VALUES (?, ?, ?)', [username, hash, email], (err, result) => {
            if (err) throw err;
            res.send('User  registered');
        });
    });
});

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    db.query('SELECT * FROM users WHERE username = ?', [username], (err, result) => {
        if (err) throw err;
        if (result.length > 0) {
            bcrypt.compare(password, result[0].password, (err, isMatch) => {
                if (err) throw err;
                if (isMatch) {
                    res.send('Logged in');
                } else {
                    res.send('Incorrect password');
                }
            });
        } else {
            res.send('User  not found');
        }
    });
});

app.listen(3000, () => {
    console.log('Server started on port 3000');
});