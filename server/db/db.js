import mysql from "mysql2/promise";
import config from "../config.js"

async function query (request, param){
	let connection = await mysql.createConnection({
		host: config.DB.HOST,
        user: config.DB.USER,
        password: config.DB.PASS,
        database: config.DB.DB
	});
	let [rows, fields] = await connection.execute(request, param);
	connection.end();

	return rows;
};

export default { query };