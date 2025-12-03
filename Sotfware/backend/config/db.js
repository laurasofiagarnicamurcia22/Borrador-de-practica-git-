import dotenv from "dotenv";
import mysql from "mysql2/promise";
dotenv.config();
export const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
});
// Probar la conexion//
try {
    const connection = await pool.getConnection();
    console.log("Conexion a la ase de datos exitosa");
    connection.release();// muy importante para liberar conexion al pool//es decir que esta usando de las 10, 1 sola conexion//

} catch (error) {
    console.log("ERROR AL CONECTAR CON LA BASE DE DATOS");

}
