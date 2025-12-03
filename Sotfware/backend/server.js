import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import path from "path";
import { fileURLToPath, fileURLToPathBuffer } from "url";// funcion convierte los modulos en url normal para encontar el sevidor //
import { authRoutes } from "./routes/authRoutes";

dotenv.config();
const app = express();
// obtener url//
const__filename = fileURLToPath(import.meta.url);
// El resultado es la URL de la carpeta donde se encuentra el archivo.
//console.log(__filename)
const_dirname = path.dirname(__filename);

// middleware para habilitar cors 
app.use(cors());
//middleware para leer los formatos Json
app.use(express.json());
// Servir los archivos estaticos del frontend
app.use(express.static(path.join(__dirname, "../frontend")));
// rutas API
app.use("/api", authRoutes);
// Ruta raiz que muestra el html de inicio 
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/pages/index.html"));
});
// Iniciar servidor 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`servidor corriendo en http://localhost:${PORT}`);
});
