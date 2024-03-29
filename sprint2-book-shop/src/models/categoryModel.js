const Database = require("../../config/mariadb");

class CategoryModel {
  static async all() {
    const sql = "SELECT * FROM category";
    try {
      const conn = await Database.getDBConnection();
      const [result, fields] = await conn.query(sql);
      return result;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = CategoryModel;
