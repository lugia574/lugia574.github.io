// const mariadb = require("mysql2/promise");
const database = require("../mariadb");
const { StatusCodes } = require("http-status-codes");

const insertDelivery = async (req, res) => {
  const { delivery } = req.body;
  const values = [delivery.address, delivery.receiver, delivery.contact];
  const sql = `INSERT INTO delivery (address, receiver, contact) 
  VALUES (?, ?, ?)`;

  try {
    const conn = await database.getDBConnection();
    const [result, fields] = await conn.execute(sql, values);
    return result.insertId;
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

const insertOrders = async (req, res, delivery_id) => {
  const { total_quantity, total_price, user_id, first_book_title } = req.body;
  const values = [
    first_book_title,
    total_quantity,
    total_price,
    user_id,
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
    return res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

const selectCartItems = async (req, res) => {
  const { items } = req.body;
  const sql = `SELECT book_id, quantity FROM cartItems WHERE id IN (?)`;

  try {
    const conn = await database.getDBConnection();
    const [orderItems, fields] = await conn.query(sql, [items]);
    return orderItems;
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

const insertOrderedBook = async (req, res, orderItems, order_id) => {
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
    return res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

const deleteCartItems = async (req, res) => {
  const { items } = req.body;
  const sql = `DELETE FROM cartItems WHERE id IN (?)`;

  try {
    const conn = await database.getDBConnection();
    const results = await conn.query(sql, [items]);
    return results[0];
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

const order = async (req, res) => {
  // delivery 삽입
  const delivery_id = await insertDelivery(req, res);

  // orders 삽입
  const order_id = await insertOrders(req, res, delivery_id);

  // items 번호들로 해당 book_id, 양 조회
  const orderItems = await selectCartItems(req, res);

  // orderedBook 삽입
  results = await insertOrderedBook(req, res, orderItems, order_id);

  // 주문한 cartItems 삭제
  result = await deleteCartItems(req, res);

  return res.status(StatusCodes.CREATED).json(results[0]);
};

const getOrders = async (req, res) => {
  const sql = `SELECT orders.id, created_at, delivery.address, delivery.receiver, delivery.contact,
                book_title, total_quantity, total_price
                FROM orders LEFT JOIN delivery
                ON orders.delivery_id = delivery.id`;

  try {
    const conn = await database.getDBConnection();
    const [rows, fields] = await conn.query(sql);
    return res.status(StatusCodes.OK).json(rows);
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

const getOrderDetail = async (req, res) => {
  const { id } = req.params;

  const sql = `SELECT book_id, title, author, price, quantity
                FROM orderedBook LEFT JOIN books
                ON orderedBook.book_id = books.id
                WHERE order_id = ?`;

  try {
    const conn = await database.getDBConnection();
    const [rows, fields] = await conn.query(sql, id);
    return res.status(StatusCodes.OK).json(rows);
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

module.exports = { order, getOrders, getOrderDetail };
