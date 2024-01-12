// const mariadb = require("mysql2/promise");
const database = require("../mariadb");
const { StatusCodes } = require("http-status-codes");

const insertDelivery = async (values) => {
  let sql = `INSERT INTO delivery (address, receiver, contact) 
  VALUES (?, ?, ?)`;

  try {
    const conn = await database.getDBConnection();
    const [result, fields] = await conn.execute(sql, values);
    return result.insertId;
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

const insertOrders = async (values) => {
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

const selectCartItems = async (items) => {
  sql = `SELECT book_id, quantity FROM cartItems WHERE id IN (?)`;

  try {
    const conn = await database.getDBConnection();
    const [orderItems, fields] = await conn.query(sql, [items]);
    return orderItems;
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

const insertOrderedBook = async (orderItems) => {
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

const deleteCartItems = async (items) => {
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
  const {
    items,
    delivery,
    total_quantity,
    total_price,
    user_id,
    first_book_title,
  } = req.body;

  // delivery 삽입
  let values = [delivery.address, delivery.receiver, delivery.contact];
  let delivery_id = await insertDelivery(values);

  // orders 삽입
  values = [
    first_book_title,
    total_quantity,
    total_price,
    user_id,
    delivery_id,
  ];
  let order_id = await insertOrders(values);

  // items 번호들로 해당 book_id, 양 조회
  const orderItems = await selectCartItems(items);

  // orderedBook 삽입
  results = await insertOrderedBook(orderItems);

  result = await deleteCartItems(items);

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
