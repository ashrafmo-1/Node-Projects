const express = require('express');
const app = express();
app.use(express.json()); // search
const productsController = require("./controller/products.controller.js"); // controllers
const { products } = require('./data/products.js');


app.get("/api/products", productsController.getAll);// get all products from file(array)
app.get("/api/products/:product_id", productsController.getSingleProduct); // get single product from file(array)
app.post("/api/products/", productsController.addNewProduct); // add new product // main make validating
// add here retype user past
app.delete("/api/products/:product_id", productsController.delProduct);

app.listen("2000", () => {
  console.log("listening server on port : 1000");
})