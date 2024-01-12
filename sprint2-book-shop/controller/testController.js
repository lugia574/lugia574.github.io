const database = require("../mariadb");
const { StatusCodes } = require("http-status-codes");

const testCon = async (req, res) => {
  const query = "select * from users";
  // let query = "select * from usersw"; // error 용
  try {
    const conn = await database.getDBConnection();
    let [data, fields] = await conn.query(query);
    console.log(data);
    return res.status(StatusCodes.OK).json(data);
  } catch (err) {
    console.log(err);
    return res.status(StatusCodes.BAD_REQUEST).json(err);
  }
};

module.exports = testCon;
