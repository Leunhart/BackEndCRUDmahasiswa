const express = require("express");
const validateuser = require("../MiddleWare/validateuser");
const ItemController = require("../Controller/mahasiswaController");
const router = express.Router();

router.post('/', validateuser, ItemController.CreateMahasiswa);

router.get('/get', ItemController.GetData);

router.put('/:id', ItemController.UpdateData);

router.delete('/:id', ItemController.DeleteData);

module.exports = router;