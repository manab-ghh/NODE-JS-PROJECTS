const express = require("express");
const router = express.Router();
const {
    getAllData,
    getDataById,
    createData,
    updateData,
    deleteData
} = require("../controllers/controllers");

router.get('/', getAllData);
router.get('/:id', getDataById);
router.post('/', createData);
router.put('/:id', updateData);
router.delete('/:id', deleteData);

module.exports = router;