const conn = require("../mariadb.js");
const { StatusCodes } = require("http-status-codes");
const dotenv = require("dotenv");
dotenv.config();

/* 변수 설명
limit : page 당 도서수
currentPage : 현재 페이지
offset = limit * (currentPage - 1)
*/
const selectBooks = (req, res) => {
  const { category_id, news, limit, currentPage } = req.query;
  const offset = limit * (currentPage - 1);

  let sql = "SELECT * FROM books";
  let values = [];
  if (category_id && news) {
    sql +=
      " WHERE category_id = ? AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()";
    values.push(category_id);
  } else if (category_id) {
    sql += " WHERE category_id = ?";
    values.push(category_id);
  } else if (news) {
    sql +=
      " WHERE pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()";
    values = [];
  }

  sql += " LIMIT ? OFFSET ?";
  console.log(sql);
  values.push(parseInt(limit), offset);

  conn.query(sql, values, (err, result) => {
    if (err) return res.status(StatusCodes.BAD_REQUEST).json(err);
    if (result.length) return res.status(StatusCodes.OK).json(result);
    else return res.status(StatusCodes.BAD_REQUEST).end();
  });
};

const bookDetail = (req, res) => {
  const id = parseInt(req.params.id);
  const sql = `SELECT * FROM Bookshop.books LEFT
  JOIN category ON books.category_id = category.id where books.id = ?`;
  conn.query(sql, id, (err, result) => {
    if (err) return res.status(StatusCodes.BAD_REQUEST).end();
    if (result[0]) return res.status(StatusCodes.OK).json(result[0]);
    else return res.status(StatusCodes.NOT_FOUND0).end();
  });
};

module.exports = { selectBooks, bookDetail };
