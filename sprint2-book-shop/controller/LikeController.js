const database = require("../mariadb");
const { StatusCodes } = require("http-status-codes");
const dotenv = require("dotenv");
dotenv.config();

const addLike = async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.body;

  const sql = "INSERT INTO likes (user_id, book_id) VALUES (?, ?)";
  const values = [user_id, id];

  try {
    const conn = await database.getDBConnection();
    const [result, fields] = await conn.query(sql, values);
    return res.status(StatusCodes.CREATED).json(result);
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

const removeLike = async (req, res) => {
  const { id } = req.params;
  const { user_id } = req.body;

  const sql = "DELETE FROM likes WHERE user_id = ? AND book_id = ?";
  const values = [user_id, id];

  try {
    const conn = await database.getDBConnection();
    const [result, fields] = await conn.query(sql, values);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

module.exports = { addLike, removeLike };
