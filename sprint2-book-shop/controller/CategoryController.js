const conn = require("../mariadb.js");
const { StatusCodes } = require("http-status-codes");
const dotenv = require("dotenv");
dotenv.config();

const allCategory = (req, res) => {
  const sql = "SELECT * FROM category";
  conn.query(sql, (err, result) => {
    if (err) return res.status(StatusCodes.BAD_REQUEST).json(err);

    return res.status(200).json(result);
  });
};

module.exports = { allCategory };
