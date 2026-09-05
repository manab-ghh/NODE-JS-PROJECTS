
let books = require('../data/books.json');

const idCounter = books.length > 0 ? Math.max(...books.map(book => book.id)) + 1 : 1;

module.exports = { books, idCounter };