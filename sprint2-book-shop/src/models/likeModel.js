const database = require("../../config/mariadb");
const ensureAuthorization = require("../utils/auth");
const { StatusCodes } = require("http-status-codes");

class LikeModel {
  static async add(req, res, bookId) {
    const sql = "INSERT INTO likes (user_id, book_id) VALUES (?, ?)";
    try {
      const authorization = await ensureAuthorization(req, res);

      if (authorization) {
        const values = [authorization.id, bookId];
        const conn = await database.getDBConnection();
        const [result, fields] = await conn.query(sql, values);
        return result;
      } else return false;
    } catch (err) {
      return err;
    }
  }

  static async remove(req, res, bookId) {
    const sql = "DELETE FROM likes WHERE user_id = ? AND book_id = ?";

    try {
      const authorization = await ensureAuthorization(req, res);
      if (authorization) {
        const values = [authorization.id, bookId];
        const conn = await database.getDBConnection();
        const [result, fields] = await conn.query(sql, values);
        return result;
      } else return false;
    } catch (err) {
      return res.status(StatusCodes.BAD_REQUEST).json(err);
    }
  }
}

module.exports = new LikeModel();
