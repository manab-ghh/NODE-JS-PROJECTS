const Data = require("../models/schema");

async function getAllData(req, res) {
    const allData = await Data.find({});
    return res.json(allData);
};

async function getDataById(req, res) {
    const data = await Data.findById(req.params.id);
    if (!data) return res.status(404).json({ message: "User not found" });
    return res.json(data);
};

async function createData(req, res) {
    const body = req.body;
    if (
        !body ||
        !body.title
    ) {
        return res.status(400).json({ message: "Missing request fields" });
    }

    const result = await Data.create({
        title: body.title,
        description: body.description,
        completed: body.completed,
        createdAt: body.createdAt
    });

    return res.status(201).json({ message: "Data created successfully", id: result._id });
};

async function updateData(req, res) {
    const { title, description, completed } = req.body;
    await Data.findByIdAndUpdate(req.params.id, { title, description, completed });
    return res.json({ message: "Data updated successfully" });
};

async function deleteData(req, res) {
    await Data.findByIdAndDelete(req.params.id);
    return res.json({ message: "Data deleted successfully" });
};

module.exports = {
    getAllData,
    getDataById,
    createData,
    updateData,
    deleteData
};
