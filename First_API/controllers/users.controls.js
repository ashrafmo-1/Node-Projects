let { users } = require("../data/users");
const { validationResult } = require("express-validator"); // medile ware

const getAllUsers = (req, res) => {
  // res .json(users); sent any data
  res.json(users); // sent json data only
}

const getSingleUser = (req, res) => {
  const userId = +req.params.userId;
  const user = users.find((user) => user.id === userId);
  if (!user) {
    return res.status(404).json({ message: "cant not find user" });
  }
  res.json(user);
}

const addNewUser = (req, res) => {
  console.log(req.body); // by default undefined because express not available to use medle ware body parser
  const error = validationResult(req);
  !error.isEmpty() ? res.status(400).json(error.array()) : null;
  // users.push({ id: users.length + 1, ...req.body }); // code show all users on post
  const user = { id: users.length + 1, ...req.body };
  users.push(user);
  res.status(201).json(user);
}

eww

const delUser = (req, res) => {
  const userId = +req.params.userId;
  users = users.filter((user) => user.id !== userId);
  res.status(200).json({success: true});
}

module.exports = {
  getAllUsers,
  getSingleUser,
  addNewUser,
  chnageUser,
  delUser
}