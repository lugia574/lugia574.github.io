const database = require("../../config/mariadb");

class OrderModel {
  async insertDelivery(delivery) {
    const values = [delivery.address, delivery.receiver, delivery.contact];
    const sql = `INSERT INTO delivery (address, receiver, contact)
            VALUES (?, ?, ?)`;

    try {
      const conn = await database.getDBConnection();
      const [result, fields] = await conn.execute(sql, values);
      return result.insertId;
    } catch (err) {
      throw err;
    }
  }

  async insertOrders(values) {
    const sql = `INSERT INTO orders
        (book_title, total_quantity, total_price, user_id, delivery_id)
        VALUES(? , ?, ?, ?, ?)`;

    try {
      const conn = await database.getDBConnection();
      const [result, fields] = await conn.execute(sql, values);
      return result.insertId;
    } catch (err) {
      throw err;
    }
  }

  async getCartItems(items) {
    const sql = `SELECT book_id, quantity FROM cartItems WHERE id IN (?)`;

    try {
      const conn = await database.getDBConnection();
      const [orderItems, fields] = await conn.query(sql, [items]);
      return orderItems;
    } catch (err) {
      throw err;
    }
  }

  async insertOrderedBook(orderItems, orderId) {
    sql = `INSERT INTO orderedBook (order_id, book_id, quantity) VALUES ?`;
    values = [];
    orderItems.forEach((item) =>
      values.push([orderId, item.book_id, item.quantity])
    );

    try {
      const conn = await database.getDBConnection();
      const results = await conn.query(sql, [values]);
      return results;
    } catch (err) {
      throw err;
    }
  }

  async deleteCartItems(items) {
    const sql = `DELETE FROM cartItems WHERE id IN (?)`;

    try {
      const conn = await database.getDBConnection();
      const results = await conn.query(sql, [items]);
      return results[0];
    } catch (err) {
      throw err;
    }
  }

  async get(userId) {
    const sql = `SELECT orders.id, created_at, delivery.address, delivery.receiver, delivery.contact,
                    book_title, total_quantity, total_price
                    FROM orders LEFT JOIN delivery
                    ON orders.delivery_id = delivery.id
                    WHERE user_id = ?`;

    try {
      const conn = await database.getDBConnection();
      const [rows, fields] = await conn.query(sql, userId);
      return rows;
    } catch (err) {
      throw err;
    }
  }

  async detail(orderId) {
    const sql = `SELECT book_id, title, author, price, quantity
                    FROM orderedBook LEFT JOIN books
                    ON orderedBook.book_id = books.id
                    WHERE order_id = ?`;

    try {
      const conn = await database.getDBConnection();
      const [rows, fields] = await conn.query(sql, orderId);
      return rows;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new OrderModel();
