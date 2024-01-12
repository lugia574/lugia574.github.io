const database = require("../mariadb");
const { StatusCodes } = require("http-status-codes");

const addToCart = async (req, res) => {
  // jwt 추가 해야함
  const { book_id, quantity, user_id } = req.body;
  const sql = `INSERT INTO cartItems (book_id, quantity, user_id) VALUES(?, ?, ?)`;
  const values = [book_id, quantity, user_id];

  try {
    const conn = await database.getDBConnection();
    const [result, fields] = await conn.query(sql, values);
    return res.status(StatusCodes.CREATED).json(result);
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

const getCartItems = async (req, res) => {
  // jwt 추가해야함
  const { user_id, selected } = req.body;
  const sql = `SELECT cartItems.id, cartItems.book_id, title, summary, cartItems.quantity, price  
                FROM cartItems LEFT JOIN books ON books.id = cartItems.book_id WHERE user_id = ? AND cartItems.id IN (?)`;

  const values = [user_id, selected];

  try {
    const conn = await database.getDBConnection();
    const [result, fields] = await conn.query(sql, values);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

const removeCartItem = async (req, res) => {
  const { id } = req.params;

  const sql = `DELETE FROM cartItems WHERE id = ?`;

  try {
    const conn = await database.getDBConnection();
    const [result, fields] = await conn.query(sql, id);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

module.exports = { addToCart, getCartItems, removeCartItem };
