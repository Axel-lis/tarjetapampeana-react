import express from 'express';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Configurar el rate limiter
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minuto
  max: 2, // Máximo de solicitudes por IP
  message: {
    status: 429,
    message: 'Has alcanzado el límite de solicitudes. Intenta nuevamente más tarde.',
  },
  standardHeaders: true, // Devuelve información del rate limit en los headers `RateLimit-*`
  legacyHeaders: false,
});

router.post('/', limiter, async (req, res) => {
  const { nombre, apellido, dni, direccion, localidad, provincia, telefono, email, consulta, mensaje } = req.body;

  const mailOptions = {
    from: '"Consulta desde página web" <no-responder@tarjetapampeana.com.ar>',
    to: 'clientes@tarjetapampeana.com.ar',
    cc: ['mchapado@yahoo.com.ar', 'comercial@tarjetapampeana.com.ar', 'administracion@tarjetapampeana.com.ar'],
    replyTo: 'clientes@tarjetapampeana.com.ar',
    subject: `Consultas y Reclamos: ${nombre} ${apellido}`,
    html: ` 
    Nombre y Apellido: ${nombre} ${apellido} <br>
    Email: ${email} <br>
    Número de DNI: ${dni} <br>
    Dirección: ${provincia}, ${localidad}, ${direccion} <br>
    TELÉFONO: ${telefono} <br>
    Reclamo y/o Consulta: ${consulta} <br>
    Observaciones: ${mensaje} <br>
    <br>
    -- <br>
    Este e-mail se ha enviado vía formulario de contacto desde Tarjeta Pampeana (http://www.tarjetapampeana.com.ar)`,
  };
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false, // Cambiar a true si se usa puerto 465
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASSWORD,
    },
    tls: {
      rejectUnauthorized: false, // Para evitar problemas con certificados
    },
  });
  try {
    // Enviar el correo
    await transporter.sendMail(mailOptions);

    // Responder al cliente
    res.status(200).json({ message: 'Solicitud de baja enviada correctamente.' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({
      message: 'El mensaje no pudo ser enviado.',
      error: error.message,
    });
  }
});

export default router;
