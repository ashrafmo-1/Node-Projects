const express = require("express");
const app = express();
app.use(express.json()); // Node.js body parsing middleware.
const usersRouter = require("./routes/users.route");

app.use("/api/users", usersRouter); // API routes have all methods

app.listen(2000, () => {
  console.log("hosting server started on port: 3000");
});