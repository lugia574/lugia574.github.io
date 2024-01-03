const conn = require("../mariadb.js");
const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
const crypto = require("crypto"); // 암호화 모듈
const dotenv = require("dotenv");
dotenv.config();

const join = (req, res) => {
  const { email, password } = req.body;

  // 비밀번호 암호화
  const salt = crypto.randomBytes(10).toString("base64");
  const hashPassword = crypto
    .pbkdf2Sync(password, salt, 10000, 10, "sha512")
    .toString("base64");

  const sql = "INSERT INTO users (email, password, salt) VALUES (?, ?, ?)";
  const values = [email, hashPassword, salt];

  conn.query(sql, values, (err, result) => {
    if (err) return res.status(StatusCodes.BAD_REQUEST).json(err);

    return res.status(StatusCodes.CREATED).json(result);
  });
};

const login = (req, res) => {
  const { email, password } = req.body;
  const sql = "SELECT * FROM users WHERE email = ?";

  conn.query(sql, email, (err, result) => {
    if (err) return res.status(StatusCodes.BAD_REQUEST).end();
    let loginUser = result[0];

    const hashPassword = crypto
      .pbkdf2Sync(password, loginUser.salt, 10000, 10, "sha512")
      .toString("base64");

    if (loginUser && loginUser.password == hashPassword) {
      const token = jwt.sign(
        {
          email: loginUser.email,
        },
        process.env.PRIVATE_KEY,
        { expiresIn: "6m", issuer: "lcw" }
      );
      // 쿠키에 담기
      res.cookie("token", token, { httpOnly: true });
      return res.status(StatusCodes.OK).json("로그인");
    } else return res.status(StatusCodes.UNAUTHORIZED).end();
  });
};

const passwordResetRequest = (req, res) => {
  const { email } = req.body;
  const sql = "SELECT * FROM users WHERE email = ?";

  conn.query(sql, email, (err, result) => {
    if (err) return res.status(StatusCodes.BAD_REQUEST).end(err);
    let user = result[0];
    if (user) {
      return res.status(StatusCodes.OK).json({ email: email });
    } else return res.status(StatusCodes.UNAUTHORIZED).end();
  });
};

const passwordReset = (req, res) => {
  const { email, password } = req.body;

  const salt = crypto.randomBytes(10).toString("base64");
  const hashPassword = crypto
    .pbkdf2Sync(password, salt, 10000, 10, "sha512")
    .toString("base64");

  const sql = "UPDATE users SET password = ?, salt = ? WHERE email = ?";
  const values = [hashPassword, salt, email];

  conn.query(sql, values, (err, result) => {
    if (err) return res.status(StatusCodes.BAD_REQUEST).end(err);

    if (result.affectedRows == 0)
      return res.status(StatusCodes.BAD_REQUEST).end();
    else return res.status(StatusCodes.OK).end();
  });
};

module.exports = { join, login, passwordResetRequest, passwordReset };
