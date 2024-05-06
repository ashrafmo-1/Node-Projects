const { products } = require("../data/products"); // productsData
const { validationResult } = require("express-validator"); // middleware

const getAll = (req, res) => {
  res.json(products);
  console.log(products);
}
const getSingleProduct = (req, res) => {
  const product_id = +req.params.product_id; // + > to main return integer number only
  const product = products.find((product) => product.id === product_id);
  if(!product) res.status(404).json({message: "id not found!"});
  res.json(product);
}

const addNewProduct = (req, res) => {
  // block of code here
  console.log(req.body); // show product in console
  const error = validationResult(req);
  !error.isEmpty() ? res.status(400).json(error.array()) : null;
  const product = { id: products.length + 1, ...req.body };
  products.push(product);
  res.status(201).json(product);
}

module.exports = {
  getAll,
  getSingleProduct,
  addNewProduct
}