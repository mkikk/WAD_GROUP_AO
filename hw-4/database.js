const Pool = require("pg").Pool;
// create database in your computer
const pool = new Pool({
  user: "postgres",
  password: "775511",
  database: "hw-4",
  host: "localhost",
  port: "5432",
});
module.exports = pool;
