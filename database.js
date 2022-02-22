const mysql = require("mysql");
require("dotenv").config();

let details = {
  host: process.env.DBHOST,
  port: process.env.DBPORT,
  user: process.env.DBUSER,
  password: process.env.DBPASSWD,
  database: process.env.DBNAME,
};

let connection = mysql.createConnection(details);
connection.connect((error) => {
  error ? console.log(error) : console.log(`Connected to DATABASE: ${details.database}`);
});
// connection.query("mysql query", (errors, records)=> {});
/* connection.query("select * from users", (errors, records) => {
  errors ? console.log(errors) : console.log(records);
}); */

module.exports = { connection };