import dotenv from 'dotenv';
import { Sequelize } from 'sequelize';

dotenv.config();


const sequelize = new Sequelize(
    process.env.DB_NAME, // Nombre de la base de datos
    process.env.DB_USER, // Usuario
    process.env.DB_PASSWORD, // Contraseña
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT,
        logging: false,
        timezone: process.env.DB_TIMEZONE,
        define: {
            freezeTableName: true,
            charset: 'utf8',
        },
    }
);

sequelize.authenticate()
    .then(() => {
        console.log('Conectado a MySQL');
    })
    .catch(err => {
        console.error('Error al conectar a la base de datos:', err);
    });

export default sequelize;