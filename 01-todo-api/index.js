const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/database");
const routes = require("./routes/routes");

dotenv.config();

connectDB();

const app = express();
const PORT = process.env.PORT;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/api/todos', routes);


app.get("/", (req, res) => {
    res.json({
        message: 'Welcome to Todo API',
        endpoints: {
            getAll: 'GET /api/todos',
            getOne: 'GET /api/todos/:id',
            create: 'POST /api/todos',
            update: 'PUT /api/todos/:id',
            delete: 'DELETE /api/todos/:id'
        }
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port: ${PORT}`);
});