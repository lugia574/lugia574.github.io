const database = require("../mariadb");
const { StatusCodes } = require("http-status-codes");
// const dotenv = require("dotenv");
// dotenv.config();

/* 변수 설명
category_id : 도서카테고리
news : 신간도서 유무 (오늘 날짜 기준 한달)
limit : page 당 도서수
currentPage : 현재 페이지
offset = limit * (currentPage - 1) : 시작위치
*/
const selectBooks = async (req, res) => {
  const { category_id, news, limit, currentPage } = req.query;
  const offset = limit * (currentPage - 1);

  let sql =
    "SELECT *, (SELECT count(*) FROM likes WHERE book_id = books.id) AS likes FROM books";
  let values = [];
  if (category_id && news) {
    sql +=
      " WHERE category_id = ? AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()";
    values.push(category_id);
  } else if (category_id) {
    sql += " WHERE category_id = ?";
    values.push(category_id);
  } else if (news)
    sql +=
      " WHERE pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()";

  sql += " LIMIT ? OFFSET ?";
  values.push(parseInt(limit), offset);

  try {
    const conn = await database.getDBConnection();
    const [result, fields] = await conn.query(sql, values);
    if (result.length) return res.status(StatusCodes.OK).json(result);
    else return res.status(StatusCodes.BAD_REQUEST).end();
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

const bookDetail = async (req, res) => {
  const { user_id } = req.body;
  const book_id = parseInt(req.params.id);
  const sql = `SELECT *,
  (SELECT count(*) FROM likes WHERE book_id = books.id) AS likes,
  (SELECT EXISTS(SELECT * FROM likes WHERE user_id = ? AND book_id = ?)) AS liked
  FROM books
  JOIN category ON books.category_id = category.category_id
  WHERE books.id = ?`;

  const values = [user_id, book_id, book_id];

  try {
    const conn = await database.getDBConnection();
    const [result, fields] = await conn.query(sql, values);
    if (result[0]) return res.status(StatusCodes.OK).json(result[0]);
    else return res.status(StatusCodes.NOT_FOUND0).end();
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

module.exports = { selectBooks, bookDetail };
