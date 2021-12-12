const Pool = require("pg").Pool;
// create database in your computer
const pool = new Pool({
  user: "postgres",
  password: "775511", //your password
  database: "hw-4", //name of your database
  host: "localhost",
  port: "5432",
});
module.exports = pool;
