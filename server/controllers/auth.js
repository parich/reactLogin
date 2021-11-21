const bcrypt = require("bcryptjs");
const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { username, password } = req.body;
    var user = await User.findOne({ username });
    if (user) {
      return res.status(400).send("User Alread exists");
    } else {
      const salt = await bcrypt.genSalt(20);
      user = new User({
        username,
        password,
      });

      user.password = await bcrypt.hash(password, salt);
      await user.save();
      res.send("register success");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    var user = await User.findOneAndUpdate({ username }, { new: true });

    if (user && user.enabled) {
      //Check Password
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send("Pasword Invalid");
      }
      // Payload
      const payload = {
        user: {
          username: user.username,
          role: user.role,
        },
      };
      //Token
      jwt.sign(payload, "jwtSecret", { expiresIn: 6300 }, (err, token) => {
        if (err) throw err;
        res.json({ token, payload });
      });
    } else {
      return res.status(400).send("User Not Found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};

exports.listUser = async (req, res) => {
  try {
    res.send("list Get User all");
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};

exports.editUser = async (req, res) => {
  try {
    res.send("user edit");
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};

exports.deleteUser = async (req, res) => {
  try {
    res.send("deleteUser User");
  } catch (err) {
    console.log(err);
    res.status(500).send("server error");
  }
};
