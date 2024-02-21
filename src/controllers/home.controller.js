// exports.home = function (req, res, next) {
//   // Do something...
// };

// exports.about = function (req, res, next) {
//   // Do something...
// };

const homeController = {
  home: (req, res, next) => {
    res.sendFile(
      __dirname.replace("src\\controllers", "src\\views") + "/index.html"
    );
  },

  about: (req, res, next) => {
    res.send("About page");
  },
};
module.exports = homeController;
