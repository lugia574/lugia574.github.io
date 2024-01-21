class CartsModel {
  async add(req, res, bookId, quantity) {
    const sql = `INSERT INTO cartItems (book_id, quantity, user_id) VALUES(?, ?, ?)`;

    try {
      const values = [bookId, quantity, authorization.id];
      const conn = await database.getDBConnection();
      const [result, fields] = await conn.query(sql, values);
      return result;
    } catch (err) {
      throw err;
    }
  }

  async get(req, res, selected, userId) {
    try {
      const values = [userId];
      let sql = `SELECT cartItems.id, cartItems.book_id, title, summary, cartItems.quantity, price  
    FROM cartItems LEFT JOIN books ON books.id = cartItems.book_id WHERE user_id = ?`;
      if (selected) {
        // 주문서 작성시 "선택한 장바구니 목록 조회"
        sql += ` AND cartItems.id IN (?)`;
        values.push(selected);
      }

      const conn = await database.getDBConnection();
      const [result, fields] = await conn.query(sql, values);
      return result;
    } catch (err) {
      throw err;
    }
  }

  async remove(req, res, cartItemId) {
    const sql = `DELETE FROM cartItems WHERE id = ?`;

    try {
      const conn = await database.getDBConnection();
      const [result, fields] = await conn.query(sql, cartItemId);
      return result;
    } catch (err) {
      throw err;
    }
  }
}
module.exports = new CartsModel();
