const express = require("express");
const bookController = require("../controllers/book.controller");

const router = express.Router();

router.get("/list", bookController.getList);

router.get("/detail/:id", bookController.detail);

router.post("/add", bookController.addBook);

router.delete("/delete/:id", bookController.deleteBook);

router.put("/update/:id", bookController.updateBook);

module.exports = router;
