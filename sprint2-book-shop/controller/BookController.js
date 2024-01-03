const conn = require("../mariadb.js");
const { StatusCodes } = require("http-status-codes");
const dotenv = require("dotenv");
dotenv.config();

const selectBooks = (req, res) => {
  const { category_id } = req.query;

  if (category_id) {
    booksByCategory(req, res, category_id);
  } else allBooks(req, res);
};

const allBooks = (req, res) => {
  const sql = "SELECT * FROM books";
  conn.query(sql, (err, result) => {
    if (err) return res.status(StatusCodes.BAD_REQUEST).end();

    return res.status(200).json(result);
  });
};

const booksByCategory = (req, res, category_id) => {
  const sql = "SELECT * FROM books WHERE category_id = ?";

  conn.query(sql, category_id, (err, result) => {
    if (err) return res.status(StatusCodes.BAD_REQUEST).json(err);
    if (result.length) return res.status(StatusCodes.OK).json(result);
    else return res.status(StatusCodes.BAD_REQUEST).end();
  });
};

const bookDetail = (req, res) => {
  const id = parseInt(req.params.id);
  const sql = "SELECT * FROM books WHERE id = ?";
  conn.query(sql, id, (err, result) => {
    if (err) return res.status(StatusCodes.BAD_REQUEST).end();
    if (result[0]) return res.status(StatusCodes.OK).json(result[0]);
    else return res.status(StatusCodes.NOT_FOUND0).end();
  });
};

module.exports = { selectBooks, bookDetail };
