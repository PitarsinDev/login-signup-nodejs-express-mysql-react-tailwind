const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3001;

app.use(cors());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'login-nodejs_db'
});

db.connect(err => {
    if (err) {
        console.error('Connect to database failed');
    } else {
        console.log('Connected to Database');
    }
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
  
    db.query('INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
      [username, email, password], (err, results) => {
        if (err) {
          console.error('Error in signup:', err);
          res.status(500).send('Error in signup');
        } else {
          res.status(200).send('Signup successful');
        }
      });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
  
    db.query('SELECT * FROM users WHERE email = ? AND password = ?',
      [email, password], (err, results) => {
        if (err) {
          console.error('Error in login:', err);
          res.status(500).send('Error in login');
        } else {
          if (results.length > 0) {
            res.status(200).send('Login successful');
          } else {
            res.status(401).send('Invalid credentials');
          }
        }
      });
});

app.listen(port, () => {
    console.log('Server is running');
});