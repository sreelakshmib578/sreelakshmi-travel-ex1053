const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.query.token || req.headers["x-access-token"];

  if (!token) {
    return res.status(401).json({
        status: "failed",
        data: "Authentication required"
    });
  }
  try {
    const decoded = jwt.verify(token, "sreetoken_12305");
    req.user = decoded;
  } catch (err) {
    return res.status(401).send({
        status: "failed",
        data: "token failed"
    });
  }
  return next();
};

module.exports = verifyToken;