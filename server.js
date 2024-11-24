const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'yourpassword',  // change this to your MySQL password
  database: 'scims_db'
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database');
  }
});

// Sample route to test connection
app.get('/', (req, res) => {
  res.send('SCIMS API is working!');
});

// Inventory routes
app.get('/inventory', (req, res) => {
  db.query('SELECT * FROM inventory', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

app.post('/inventory', (req, res) => {
  const { name, quantity, price } = req.body;
  const query = 'INSERT INTO inventory (name, quantity, price) VALUES (?, ?, ?)';
  db.query(query, [name, quantity, price], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Product added successfully', productId: results.insertId });
  });
});

app.put('/inventory/:id', (req, res) => {
  const { id } = req.params;
  const { name, quantity, price } = req.body;
  const query = 'UPDATE inventory SET name = ?, quantity = ?, price = ? WHERE id = ?';
  db.query(query, [name, quantity, price, id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Product updated successfully' });
  });
});

app.delete('/inventory/:id', (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM inventory WHERE id = ?';
  db.query(query, [id], (err, results) => {
    if (err) throw err;
    res.json({ message: 'Product deleted successfully' });
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
