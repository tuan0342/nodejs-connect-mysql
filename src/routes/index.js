const homeRouter = require("./home.router");
const bookRouter = require("./book.router");

const route = (app) => {
  app.use("/", homeRouter);
  app.use("/book", bookRouter);
};

module.exports = route;
