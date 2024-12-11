import sequelize from '../config/db.js'; 
import { QueryTypes } from 'sequelize'; 
import rateLimit from 'express-rate-limit';
import nodemailer from 'nodemailer';


export const calcularCuota = async (req, res) => {
    const { pimporte, pcuotas } = req.body;

    if (!pimporte || !pcuotas) {
        return res.status(400).json({ error: 'Variables de solicitud no encontradas o no es una solicitud válida.' });
    }

    const importe = parseInt(pimporte, 10);
    const cuotas = parseInt(pcuotas, 10);
    const periodo = new Date().toISOString().slice(0, 7).replace('-', ''); // Genera '202410'

    try {
        // Realizar la consulta
        const resultado = await sequelize.query(
            'SELECT * FROM prest_param WHERE periodo = :periodo',
            {
                replacements: { periodo },
                type: QueryTypes.SELECT,
            }
        );

        if (resultado.length > 0) {
            const tem_fin = parseFloat(resultado[0].tem_fin);
            const tasa_mensual = tem_fin / 100 * 1.21;

            // Calcular la cuota mensual
            const cuota = parseFloat(
                (importe * (tasa_mensual / (1 - Math.pow(1 + tasa_mensual, -cuotas)))).toFixed(2)
            );

            return res.json({ cuota });
        } else {
            return res.status(404).json({ error: 'No se encontraron datos para el período.' });
        }
    } catch (error) {
        console.error('Error en la consulta SQL:', error.message);
        return res.status(500).json({ error: 'Error en la consulta SQL: ' + error.message });
    }
};



// Configurar rate limiter
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minuto
  max: 2, // Máximo de solicitudes por IP
  message: {
    status: 429,
    message: 'Has alcanzado el límite de solicitudes. Intenta nuevamente más tarde.',
  },
  standardHeaders: true,
  legacyHeaders: false,
});
// Enviar email
export const sendEmail = async (req, res) => {
  limiter(req, res, async () => {
    const { nombre, apellido, dni, calle, numero, localidad, provincia, telefono, email, monto, cuotas, tarjetaPampeana } = req.body;

    try {
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: 587,
            secure: false, 
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
            tls: {
                rejectUnauthorized: false,
            },
        });

        const mailOptions = {
            from: '"Consulta desde página web" <no-responder@tarjetapampeana.com.ar>',
            to: 'clientes@tarjetapampeana.com.ar',
            cc: [
                'mchapado@yahoo.com.ar',
                'comercial@tarjetapampeana.com.ar',
                'administracion@tarjetapampeana.com.ar',
            ],
            replyTo: 'clientes@tarjetapampeana.com.ar',
            subject: `Solicitud de comercio: ${nombre} ${apellido}`,
            html: `
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Apellido:</strong> ${apellido}</p>
                <p><strong>DNI:</strong> ${dni}</p>
                <p><strong>Dirección:</strong> ${calle} ${numero}</p>
                <p><strong>Localidad:</strong> ${localidad}</p>
                <p><strong>Provincia:</strong> ${provincia}</p>
                <p><strong>Teléfono:</strong> ${telefono}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Monto solicitado:</strong> ${monto}</p>
                <p><strong>Cuotas:</strong> ${cuotas}</p>
                <p><strong>Tarjeta Pampeana:</strong> ${tarjetaPampeana}</p>
                <br>
                <p>--</p>
                <p>Este e-mail se ha enviado vía formulario de contacto desde Tarjeta Pampeana.</p>
            `,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'Correo enviado correctamente.' });
    } catch (error) {
        console.error('Error al enviar el correo:', error);
        return res.status(500).json({
            message: 'El mensaje no pudo ser enviado.',
            error: error.message,
        });
    }
  });
};