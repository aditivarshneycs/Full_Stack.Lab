const express = require('express');
const cors = require('cors');
const connectDB = require('./db');
const Book = require('./models/books');

const app = express();
app.use(cors());
app.use(express.json());

connectDB();

// GET all books
app.get('/books', async (req, res) => {
  const books = await Book.find();
  res.json(books);
});

// GET book by ID
app.get('/books/:id', async (req, res) => {
  const book = await Book.findById(req.params.id);
  res.json(book);
});

// POST new book
app.post('/books', async (req, res) => {
  const book = new Book(req.body);
  await book.save();
  res.json(book);
});

// PUT update book
app.put('/books/:id', async (req, res) => {
  const updated = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE book
app.delete('/books/:id', async (req, res) => {
  await Book.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

app.listen(5000, () => console.log('Server running on port 5000'));
