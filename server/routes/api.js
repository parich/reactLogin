const express = require("express");
const route = express.Router();

//controller
const {
  register,
  login,
  listUser,
  editUser,
  deleteUser,
} = require("../controllers/auth");

//middleware
const { auth } = require("../middleware/auth");

route.get("/", (req, res) => {
  res.send("Hello Api");
});

route.get("/parich", (req, res) => {
  res.send("Hello Api Parich");
});

// ใช้งาน middleware
route.get("/parichy", auth, (req, res) => {
  res.send("Hello Api Parich");
});

//@Endpoint https://localhost:3000/api/register
//@Method   post
//@Aceess   Publish
route.post("/register", register);

//@Endpoint https://localhost:3000/api/login
//@Method   post
//@Aceess   Publish
route.post("/login", login);

//@Endpoint http://localhost:3000/api/auth
//@Method   GET
//@Aceess   Publish
route.get("/auth", listUser);

//@Endpoint https://localhost:3000/api/auth
//@Method   put
//@Aceess   Publish
route.put("/auth", editUser);

//@Endpoint https://localhost:3000/api/auth
//@Method   DELETE
//@Aceess   Publish
route.delete("/auth", deleteUser);

module.exports = route;
