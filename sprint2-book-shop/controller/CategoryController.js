const database = require("../mariadb");
const { StatusCodes } = require("http-status-codes");

const allCategory = async (req, res) => {
  const sql = "SELECT * FROM category";

  try {
    const conn = await database.getDBConnection();
    const [result, fields] = await conn.query(sql);
    return res.status(StatusCodes.OK).json(result);
  } catch (err) {
    return res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

module.exports = { allCategory };
