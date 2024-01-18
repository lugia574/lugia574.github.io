const BookModel = require("../models/bookModel");
const { badRequestResponse, successResponse } = require("../utils/response");

/* 변수 설명
category_id : 도서카테고리
news : 신간도서 유무 (오늘 날짜 기준 한달)
limit : page 당 도서수
currentPage : 현재 페이지
offset = limit * (currentPage - 1) : 시작위치
*/
class BookController {
  async select(req, res) {
    const allBooksRes = {};
    const { category_id, news, limit, currentPage } = req.query;

    try {
      const books = await BookModel.getBooks(
        category_id,
        news,
        limit,
        currentPage
      );

      allBooksRes.books = books;

      const totalCount = await BookModel.getTotalCount();

      const pagination = {
        currentPage: parseInt(currentPage),
        totalCount,
      };
      allBooksRes.totalCount = pagination;

      return successResponse(res, allBooksRes);
    } catch (err) {
      return badRequestResponse(res, err);
    }
  }

  async detail(req, res) {
    // 로그인 상태가 아니면 liked 빼고 보내주고
    const bookId = parseInt(req.params.id);

    try {
      const result = await BookModel.getBookDetail(req, res, bookId);
      if (result) return successResponse(res, result);
      else return notFoundResponse(res, "도서 정보가 없습니다.");
    } catch (err) {
      console.log(err);
      return badRequestResponse(res, err);
    }
  }
}

module.exports = new BookController();

// legacy code
// const selectBooks = async (req, res) => {
//   const allBooksRes = {};
//   const { category_id, news, limit, currentPage } = req.query;
//   const offset = limit * (currentPage - 1);

//   let sql =
//     "SELECT SQL_CALC_FOUND_ROWS *, (SELECT count(*) FROM likes WHERE book_id = books.id) AS likes FROM books";
//   let values = [];
//   if (category_id && news) {
//     sql +=
//       " WHERE category_id = ? AND pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()";
//     values.push(category_id);
//   } else if (category_id) {
//     sql += " WHERE category_id = ?";
//     values.push(category_id);
//   } else if (news)
//     sql +=
//       " WHERE pub_date BETWEEN DATE_SUB(NOW(), INTERVAL 1 MONTH) AND NOW()";

//   sql += " LIMIT ? OFFSET ?";
//   values.push(parseInt(limit), offset);

//   try {
//     const conn = await database.getDBConnection();
//     let [result, fields] = await conn.query(sql, values);
//     result.map((e) => {
//       e.pubDate = e.pub_date;
//       delete e.pub_date;
//     });
//     allBooksRes[books] = result;

//     sql = `SELECT found_rows()`;
//     [result, fields] = await conn.execute(sql);
//     const pagination = {};
//     pagination[currentPage] = parseInt(currentPage);
//     // 안되면 result[0]["found_rows()"];
//     pagination[totalCount] = result;
//     allBooksRes.totalCount = pagination;

//     if (allBooksRes[books].length && allBooksRes[totalCount])
//       return res.status(StatusCodes.OK).json(allBooksRes);
//     else return res.status(StatusCodes.BAD_REQUEST).end(err);
//   } catch (err) {
//     return res.status(StatusCodes.BAD_REQUEST).json(err);
//   }
// };

// const bookDetail = async (req, res) => {
//   // 로그인 상태가 아니면 liked 빼고 보내주고

//   const authorization = await ensureAuthorization(req, res);
//   const book_id = parseInt(req.params.id);
//   let sql = "";
//   const values = [];
//   if (authorization) {
//     sql = `SELECT *,
//     (SELECT count(*) FROM likes WHERE book_id = books.id) AS likes,
//     (SELECT EXISTS(SELECT * FROM likes WHERE user_id = ? AND book_id = ?)) AS liked
//     FROM books
//     JOIN category ON books.category_id = category.category_id
//     WHERE books.id = ?`;
//     values.push(authorization.id, book_id);
//   } else {
//     sql = `SELECT *,
//     (SELECT count(*) FROM likes WHERE book_id = books.id) AS likes,
//     FROM books
//     JOIN category ON books.category_id = category.category_id
//     WHERE books.id = ?`;
//   }
//   values.push(book_id);

//   try {
//     const conn = await database.getDBConnection();
//     const [result, fields] = await conn.query(sql, values);
//     if (result[0]) return res.status(StatusCodes.OK).json(result[0]);
//     else return res.status(StatusCodes.NOT_FOUND).end();
//   } catch (err) {
//     return res.status(StatusCodes.BAD_REQUEST).json(err);
//   }
// };
