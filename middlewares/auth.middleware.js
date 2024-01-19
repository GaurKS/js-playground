const jwt = require("jsonwebtoken");
const config = require("../config/config");

exports.verifyToken = (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers.authorization.split(" ")[1];
  if (!token) {
    return res.status(403).send({
      status: 403,
      message: "Auth Token missing"
    });
  }
  try {
    const decoded = jwt.verify(token, config.jwt_secret);
    req.user = {
      id: decoded.id,
      email: decoded.email
    }
  } catch (err) {
    console.log("err :", err);
    return res.status(401).send({
      status: 401,
      message: "Invalid Token"
    });
  }
  return next();
};