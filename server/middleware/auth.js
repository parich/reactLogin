const jwt = require("jsonwebtoken");

exports.auth = (req, res, next) => {
  try {
    const token = req.headers["authtoken"];
    if (!token) {
      res.status(401).send("No Token");
    }
    const decode = jwt.verify(token, "jwtSecret");
    //req.user = decode.user
    console.log(decode);
    next();
  } catch (err) {
    console.log(err);
    res.status(401).send("Token Invavid");
  }
};
