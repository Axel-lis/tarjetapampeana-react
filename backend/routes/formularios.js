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



router.post('/send-email',limiter, async (req, res) => {
    const {
        nombre, 
        apellido,
        direccion,
        localidad,
        provincia,
        telefono,
        email, 
        tipoComercio,
        nombreFantasia,
        cuit,
        imagen,
    } = req.body;

    try {
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
   // Configuración del correo
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
        <p><strong>Dirección:</strong> ${direccion}</p>
        <p><strong>Localidad:</strong> ${localidad}</p>
        <p><strong>Provincia:</strong> ${provincia}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Rubro de Comercio:</strong> ${tipoComercio}</p>
        <p><strong>Nombre de Fantasía:</strong> ${nombreFantasia}</p>
        <p><strong>Número de CUIT:</strong> ${cuit}</p>
        <p><strong>Link a imagen/logo:</strong> <a href="${imagen}">${imagen}</a></p>
        <br>
        <p>--</p>
        <p>Este e-mail se ha enviado vía formulario de contacto desde Tarjeta Pampeana.</p>
      `,
    };

    // Enviar el correo
    await transporter.sendMail(mailOptions);

    // Responder al cliente
    res.status(200).json({ message: 'Correo enviado correctamente.' });
  } catch (error) {
    console.error('Error al enviar el correo:', error);
    res.status(500).json({
      message: 'El mensaje no pudo ser enviado.',
      error: error.message,
    });
  }
});

export default router;