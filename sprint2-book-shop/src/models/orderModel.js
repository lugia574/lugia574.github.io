const database = require("../../config/mariadb");
const ensureAuthorization = require("../utils/auth");

class OrderModel {
  async insertDelivery(req, res) {
    const { delivery } = req.body;
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

  async insertOrders(req, res, delivery_id, authorization) {
    const { total_quantity, total_price, first_book_title } = req.body;

    const values = [
      first_book_title,
      total_quantity,
      total_price,
      authorization.id,
      delivery_id,
    ];
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

  async selectCartItems(req, res) {
    const { items } = req.body;
    const sql = `SELECT book_id, quantity FROM cartItems WHERE id IN (?)`;

    try {
      const conn = await database.getDBConnection();
      const [orderItems, fields] = await conn.query(sql, [items]);
      return orderItems;
    } catch (err) {
      throw err;
    }
  }

  async insertOrderedBook(req, res, orderItems, order_id) {
    sql = `INSERT INTO orderedBook (order_id, book_id, quantity) VALUES ?`;
    values = [];
    orderItems.forEach((item) =>
      values.push([order_id, item.book_id, item.quantity])
    );

    try {
      const conn = await database.getDBConnection();
      const results = await conn.query(sql, [values]);
      return results;
    } catch (err) {
      throw err;
    }
  }

  async deleteCartItems(req, res) {
    const { items } = req.body;
    const sql = `DELETE FROM cartItems WHERE id IN (?)`;

    try {
      const conn = await database.getDBConnection();
      const results = await conn.query(sql, [items]);
      return results[0];
    } catch (err) {
      throw err;
    }
  }

  async get(req, res) {
    const sql = `SELECT orders.id, created_at, delivery.address, delivery.receiver, delivery.contact,
                    book_title, total_quantity, total_price
                    FROM orders LEFT JOIN delivery
                    ON orders.delivery_id = delivery.id
                    `;

    try {
      const authorization = await ensureAuthorization(req, res);
      if (!authorization) {
        throw new ReferenceError("jwt must be provided");
      }
      const conn = await database.getDBConnection();
      const [rows, fields] = await conn.query(sql);
      return rows;
    } catch (err) {
      throw err;
    }
  }

  async Detail(req, res, orderId) {
    const order_id = req.params.id;

    const sql = `SELECT book_id, title, author, price, quantity
                    FROM orderedBook LEFT JOIN books
                    ON orderedBook.book_id = books.id
                    WHERE order_id = ?`;

    try {
      const authorization = await ensureAuthorization(req, res);
      if (!authorization) {
        throw new ReferenceError("jwt must be provided");
      }
      const conn = await database.getDBConnection();
      const [rows, fields] = await conn.query(sql, order_id);
      return rows;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new OrderModel();
