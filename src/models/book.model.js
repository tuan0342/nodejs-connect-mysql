const promisePool = require("../db/database");

module.exports = class Book {
  constructor(book) {
    this.id = book.id;
    this.name = book.name;
    this.authorId = book.authorId;
  }

  static getAll = async () => {
    const [rows, fields] = await promisePool.query(
      "SELECT * FROM nodejs_test_dev.books;"
    );
    return rows;
  };

  static getById = async (id) => {
    const [rows, fields] = await promisePool.query(
      "SELECT * FROM nodejs_test_dev.books where id = ?",
      [id]
    );
    return rows[0];
  };

  static create = async (data) => {
    const [result] = await promisePool.query(
      "INSERT INTO nodejs_test_dev.books (name, authorId) VALUES (?, ?);",
      [data.name, data.authorId]
    );
    const newData = { id: result.insertId, ...data };
    return newData;
  };

  static delete = async (id) => {
    const [result] = await promisePool.query(
      "DELETE FROM nodejs_test_dev.books WHERE id= ? ;",
      [id]
    );
    if (result.affectedRows === 1) {
      return "Xóa book có id là " + id + " thành công!";
    } else {
      return "Không có book có id là " + id;
    }
  };

  static update = async (id, newBook) => {
    const [result] = await promisePool.query(
      "UPDATE nodejs_test_dev.books SET name = ?, authorId = ? WHERE id = ?;",
      [newBook.name, newBook.authorId, id]
    );
    if (result.affectedRows === 1) {
      return { id: id, ...newBook };
    } else {
      return "Cập nhật thất bại";
    }
  };
};

// const Book = function (book) {
//   this.id = book.id;
//   this.name = book.name;
//   this.authorId = book.authorId;
// };

// Book.getAll = async (callback) => {
//   try {
//     const [rows, fields] = await promisePool.query(
//       "SELECT * FROM nodejs_test_dev.books;"
//     );

//     callback(rows); // truyền data vào trong callback function
//   } catch (error) {
//     callback(error);
//   }
// };

// Book.getById = async (id) => {
//   const [rows, fields] = await promisePool.query(
//     "SELECT * FROM nodejs_test_dev.books where id = ?",
//     [id]
//   );
//   return rows[0];
// };

// Book.create = async (data) => {
//   const [result] = await promisePool.query(
//     "INSERT INTO nodejs_test_dev.books (name, authorId) VALUES (?, ?);",
//     [data.name, data.authorId]
//   );
//   const newData = { id: result.insertId, ...data };
//   return newData;
// };

// Book.delete = (id, callback) => {
//   callback("Xoa book co id " + id + " thanh cong!");
// };

// Book.update = (data, callback) => {
//   callback(data);
// };

// module.exports = Book;
