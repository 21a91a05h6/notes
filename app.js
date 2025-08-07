const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = 5000;

app.use(express.json());

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'n3u3da!',
    database: 'conygre'
});


db.connect(err => {
    if (err) {
        console.error('Error connecting to the database:', err);
        return;
    }
    console.log('Connected to the MySQL database.');
});
// Retrieve all items
app.get('/items', (req, res) => {
    db.query('SELECT * FROM compact_discs', (err, results) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json(results);
        }
    });
});

// Retrieve a specific item by ID
app.get('/items/:item_id', (req, res) => {
    const { item_id } = req.params;
    db.query('SELECT * FROM compact_discs WHERE id = ?', [item_id], (err, results) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json(results[0]);
        }
    });
});

// Create a new item
app.post('/items', (req, res) => {
    const { title, artist, price, tracks } = req.body;
    const query = 'INSERT INTO compact_discs (title, artist, price, tracks) VALUES (?, ?, ?, ?)';
    db.query(query, [title, artist, price, tracks], (err, results) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.status(201).json({ message: 'Item created successfully', item_id: results.insertId });
        }
    });
});

// Update an existing item
app.put('/items/:item_id', (req, res) => {
    const { item_id } = req.params;
    const { title, artist, price, tracks } = req.body;
    const query = 'UPDATE compact_discs SET title = ?, artist = ?, price = ?, tracks = ? WHERE id = ?';
    db.query(query, [title, artist, price, tracks, item_id], (err, results) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json({ message: 'Item updated successfully' });
        }
    });
});

// Delete an item
app.delete('/items/:item_id', (req, res) => {
    const { item_id } = req.params;
    db.query('DELETE FROM compact_discs WHERE id = ?', [item_id], (err, results) => {
        if (err) {
            res.status(500).json({ error: err });
        } else {
            res.json({ message: 'Item deleted successfully' });
        }
    });
});