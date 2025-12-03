import { pool } from "../config/db.js";
// crear usuario nuevo
export const createUser = async (nombre, email, hashedpassword) => {
    const [result] = await pool.query(
        "insert into user(name, email, password, rol) values (?, ?, ?; ?)"
        (name, email, hashedpassword, "cliente")
    );
    return result.Insertid //Devolverme el id del usuario nuevo 
};

// Buscar Usuario por Email para hacer login 
export const findUserByEmail = async (email) => {
    const [rows]= await pool.query(
        "select id, name, email, password, rol from users where email =?",
        [email]
    );
    return rows(0);//devuelvame un solo usuario un solo pos
    
}