module.exports = app => {
  const skus = require("../controllers/sku.controller.js");

  // Retrieve all States
  app.get("/skus", skus.getAll);
};
