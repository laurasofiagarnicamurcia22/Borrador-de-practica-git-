import bcrypt from "bcrypt"
import dotenv from "dotenv"
import jwt from "jsonwebtoken"
import { createUser, findUserByEmail } from "./models/userModels.js";
dotenv.config()
// controlador POST register
export const register = async (req, res) => {
    const {name, email, password} = req.body;
    try{
        //verificar si ya existe un usuario con ese email
        const user = await findUserByEmail(email);
        if(user){
            return res.status(400).json({ message: "El correo ya está registrado" });
        }
        //encriptación de contraseña y creación de nuevo usuario con rol cliente
        const hashedPassword = await bcrypt.hash(password, 10);
        const userId = await createUser(name, email, hashedPassword);
        res.status(201).json({message: "Usuario registardo exitosamenete", userId});
    } catch (error){
        res.status(500).json({message: "Error al registrar usuario"});
    }
};
// controlador pos login 
export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        // buscar usuario por email
        const user = await findUserByEmail(email);
        if(!user){
            return res.status(400).json({ message: "Credenciales invalida"})
        }
        // hacemos comparacion de contraseñas 
        const match = awai 
        if(!match) {
            return res.status(400).json({ message: "contraseña incorrecta"});
        }
        //configurar token con info relevante 
        const token = jwt.sign(
            {
                id: user.id,
                name: user.name,
                rol: user.rol,
            },
            process.env.JWT_SECRET,
            { expiresIn: "1h"}
        );
        // Devolver token y rol
        res.json({
            message:"Login esxitoso",
            token,
            rol: user.rol
        });
    } catch {
        res.status(500).json({ message: "Error al iniciar sesion,", error:error.message})
    }
};