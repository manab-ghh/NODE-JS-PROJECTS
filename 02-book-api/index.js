const express = require("express");
const bookRoutes = require("./routes/books");

const app = express();
const PORT = process.env.PORT || 3200;

app.use(express.json());

app.use("/api", bookRoutes);


app.get("/", (req, res) => {
    res.json({ 
        message: "Welcome to the Book API",
        endpoints: {
            "GET /api/books": "Get all books",
            "GET /api/books/:id": "Get a book by ID",
            "POST /api/books": "Create a new book",
            "PUT /api/books/:id": "Update a book by ID",
            "DELETE /api/books/:id": "Delete a book by ID"
        }
    });

});

app.use((req, res) => {
    res.status(404).json({ message: "Endpoint not found" });
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})