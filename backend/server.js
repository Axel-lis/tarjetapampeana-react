import dotenv from 'dotenv';
import app from './app.js';
import cors from 'cors'; // Importar cors

dotenv.config();

const PORT = process.env.PORT || 3000;

// Configuración de CORS
const corsOptions = {
  origin: ['https://tarjetapampeana.com.ar', 'https://www.tarjetapampeana.com.ar'],  // Agregar los orígenes permitidos
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,  // Si usas cookies o JWT en las cookies
  allowedHeaders: 'Content-Type,Authorization',  // Permitir estos encabezados
};

app.use(cors(corsOptions));  // Aplicar configuración de CORS

app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}.`);
});
