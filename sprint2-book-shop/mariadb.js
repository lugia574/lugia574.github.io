const mariadb = require("mysql2");

const connenction = mariadb.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "Bookshop",
  dateStrings: true,
});

module.exports = connenction;
