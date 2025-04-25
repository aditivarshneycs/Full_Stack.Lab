const { v4: uuidv4 } = require('uuid');

let books = [];

function getBooks() {
  return books;
}

function getBookById(id) {
  return books.find(book => book.id === id);
}

function addBook(book) {
  const newBook = { ...book, id: uuidv4() };
  books.push(newBook);
  return newBook;
}

function updateBook(id, updatedData) {
  const index = books.findIndex(book => book.id === id);
  if (index === -1) return null;
  books[index] = { ...books[index], ...updatedData };
  return books[index];
}

function deleteBook(id) {
  books = books.filter(book => book.id !== id);
}

module.exports = {
  getBooks,
  getBookById,
  addBook,
  updateBook,
  deleteBook
};
