import mysql from "mysql";

const connection = mysql.createConnection(
    {
        host: "localhost",
        user: "root",
        password: "1234",
        database: "slash",
        multipleStatements: true
    }
)


export default connection;