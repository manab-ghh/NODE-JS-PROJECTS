const { books, idCounter } = require("../data/books");

const getAllBooks = (req, res) => {
    res.json(books);
}

const getBookById = (req, res) => {
    const id = parseInt(req.params.id);
    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({ message: "Book not found" });
    }

    res.json(book);
};

const createBook = (req, res) => {
    const { title, author, year, genre } = req.body;

    if (!title || !author || !year || !genre) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const newBook = {
        id: idCounter.value++,
        title,
        author,
        year,
        genre
    };

    books.push(newBook);
    res.status(201).json(newBook);
};

const updateBook = (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === id);

    if (bookIndex === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    const { title, author, year, genre } = req.body;

    if (title) books[bookIndex].title = title;
    if (author) books[bookIndex].author = author;
    if (year) books[bookIndex].year = parseInt(year);
    if (genre) books[bookIndex].genre = genre;

    res.json(books[bookIndex]);
};

const deleteBook = (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex(b => b.id === id);

    if (bookIndex === -1) {
        return res.status(404).json({ message: "Book not found" });
    }

    books.splice(bookIndex, 1);
    res.status(204).send();
};

module.exports = {
    getAllBooks,
    getBookById,
    createBook,
    updateBook,
    deleteBook
};  