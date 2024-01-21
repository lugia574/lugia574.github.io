const database = require("../../config/mariadb");
class LikeModel {
  static async add(req, res, bookId) {
    const sql = "INSERT INTO likes (user_id, book_id) VALUES (?, ?)";
    try {
      const values = [authorization.id, bookId];
      const conn = await database.getDBConnection();
      const [result, fields] = await conn.query(sql, values);
      return result;
    } catch (err) {
      throw err;
    }
  }

  static async remove(req, res, bookId) {
    const sql = "DELETE FROM likes WHERE user_id = ? AND book_id = ?";

    try {
      const values = [authorization.id, bookId];
      const conn = await database.getDBConnection();
      const [result, fields] = await conn.query(sql, values);
      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new LikeModel();
