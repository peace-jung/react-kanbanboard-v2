import mysql from 'mysql';

/* mysql connetction */
const mysqlConn = mysql.createConnection({
  host: "localhost", // your ip
  port: 3306,
  user: "root", // user
  password: "1234", // pw
  database: "Kanban" // database name
});

mysqlConn.connect((err) => {
  if (err) throw err;
  console.log('connecting mysql');
});

module.exports = mysqlConn;