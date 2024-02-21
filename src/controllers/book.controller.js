let Book = require("../models/book.model");

const bookController = {
  getList: async (req, res, next) => {
    try {
      res.append("Warning", "201 Warning");
      let data = await Book.getAll();
      res.json({ result: data });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  detail: async (req, res, next) => {
    try {
      let data = await Book.getById(req.params.id);
      res.json({ result: data });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  addBook: async (req, res, next) => {
    try {
      var data = req.body;
      let response = await Book.create(data);
      res.json({ result: response });
    } catch (error) {
      if ((error.errno = 1452)) {
        res.status(400).send({ result: "Không tồn tại tác giả" });
      } else {
        res.status(500).send({ error: error.message });
      }
    }
  },

  deleteBook: async (req, res, next) => {
    try {
      var idDelete = req.params.id;
      const response = await Book.delete(idDelete);
      res.json({ result: response });
    } catch (error) {
      res.status(500).send({ error: error.message });
    }
  },

  updateBook: async (req, res, next) => {
    try {
      let idBook = req.params.id;
      let newBook = req.body;
      const response = await Book.update(idBook, newBook);
      res.json({ result: response });
    } catch (error) {
      if ((error.errno = 1452)) {
        res.status(400).send({ result: "Không tồn tại tác giả" });
      } else {
        res.status(500).send({ error: error.message });
      }
    }
  },
};
module.exports = bookController;
