import { useState } from 'react';
import { FaPlus } from 'react-icons/fa';
const PreguntasFrecuentes = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const closeAllFaqs = () => setOpenFaq(null);

  const faqStyle = {
    container: {
      position: 'relative',
      width: '100%',
      maxWidth: '630px',
      left: '0',
      padding: '20px',
    },
    question: {
      backgroundColor: '#f0f0f0',
      marginBottom: '10px',
      padding: '15px 20px',
      borderRadius: '10px',
      cursor: 'pointer',
    },
    answer: {
      margin: '10px 0',
    },
    icon: {
      transition: 'transform 0.3s ease',
    },
    rotate: {
      transform: 'rotate(90deg)',
    },
  };

  return (
    <article style={{ padding: '60px 20px' }} onClick={closeAllFaqs}>
      <h1 style={{ textAlign: 'left', fontSize: '2rem', marginBottom: '30px', marginLeft: '20px' }}>
        Preguntas Frecuentes
      </h1>
      <div style={faqStyle.container} onClick={(e) => e.stopPropagation()}>
        {preguntas.map((pregunta, index) => (
          <div className="items-start" style={faqStyle.question} key={index} onClick={() => toggleFaq(index)}>
            <h3 style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start' }}>
              {pregunta.titulo}
              <i
                className={FaPlus}
                style={{
                  ...faqStyle.icon,
                  ...(openFaq === index ? faqStyle.rotate : {}),
                }}
              />
            </h3>
            {openFaq === index && (
              <div style={faqStyle.answer}>
                <p>{pregunta.respuesta}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </article>
  );
};

const preguntas = [
  {
    titulo: '¿Qué es Tarjeta Pampeana?',
    respuesta:
      'Tarjeta Pampeana es una Entidad No Financiera Emisora de Tarjetas de Crédito Regulada por el BCRA que brinda soluciones financieras de calidad, como Tarjetas de Crédito Regional y Nacional, Préstamos en efectivo por CBU, Red de Comercios Adheridos en Todo el país, Loyalty Plan a Clientes, etc.',
  },
  {
    titulo: '¿Cuáles son los requisitos para tener Pampeana?',
    respuesta:
      '¡Solo con tu DNI! Podés tramitar directamente tu tarjeta Pampeana desde nuestra web en pocos minutos. También podés acercarte a nuestros centros de Atención para asesorarte y obtener tu Paquete Premium con: * DNI * Ingreso Demostrable (Recibo de Sueldo – Jubilación – Pensión – Últimos 3 pagos de Monotributo (Monotributo) o Últimos 3 pagos de IIBB (responsable Inscripto) • Servicio a tu nombre (Consultar por excepciones) • C.B.U. Bancario (en caso que tus ingresos estén bancarizados)',
  },
  {
    titulo: '¿Puedo Tener Adicionales?',
    respuesta: 'Si. Podes tener hasta 2 adicionales por persona.',
  },
  {
    titulo: '¿Cómo accedo al portal de Autogestión?',
    respuesta:
      'Para ingresar al portal de autogestión deberás dirigirte a esta dirección https://www.online.pampeana.com.ar, allí podrás registrarte e iniciar sesión para administrar tus créditos desde la comodidad de tu hogar.',
  },
  {
    titulo: '¿Qué costos tiene la Tarjeta Pampeana o el Paquete Premium Gold?',
    respuesta:
      'Tanto Tarjeta Pampeana como el Paquete Premium Gold NO TIENEN COSTO de emisión. Podes chequear los costos de mantenimiento aquí: https://tarjetapampeana.com.ar/pages/paravos.php#costos. Importante: Si usted no tiene saldo pendiente SU TARJETA NO GENERA NINGÚN TIPO DE COSTO.',
  },
  {
    titulo: '¿Hay Préstamos?',
    respuesta:
      '¡SI! Con tu Paquete Premium Gold Ya tenes PRE-APROBADO un Crédito Personal a tu disposición y un límite para retiro de Efectivo en Cajeros*** También podés acceder a los mejores Prestamos Personales hasta en 15 cuotas: PAMPA CASH. Desde el portal de autogestión podrás solicitar tu préstamo en cuestión de segundos.',
  },
  {
    titulo: '¿Dónde puedo consultar mis Limites y Disponibles?',
    respuesta:
      'Podrás ver esta información desde nuestro espacio de AUTOGESTIÓN: https://online.pampeana.com.ar/ o desde nuestra APP TARJETA PAMPEANA, disponible en Google Play Store: https://play.google.com/store/apps/details?id=com.pampeana.mobile&pli=1 & App Store.',
  },
  {
    titulo: '¿Cómo y dónde puedo pagar mi Resumen Mensual?',
    respuesta:
      'Podés pagar tu resumen por diferentes medios para tu mayor comodidad: Débito Automático, Portal de Autogestión, Cuenta DNI, Locales Pampa Pago y Provincia Net, Locales Aguirrezabala Hogar y Puntos de Pago Habilitados.',
  },
  {
    titulo: '¿Cuáles son los Requisitos para Comercios?',
    respuesta:
      '¿Estás interesado en que tu comercio VENDA con Tarjeta Pampeana? Tenemos la MEJOR OFERTA COMERCIAL para tu comercio. En solo 24 horas tu comercio YA está operando con Tarjeta Pampeana. Tasas Bonificadas para ser competitivo SIEMPRE. Acreditación en la Cuenta de tu elección. Requisitos: DNI del Titular, Constancia de IIBB, CBU para generar los depósitos.',
  },
  {
    titulo: '¿Cuál es el Número de Contacto ante consultas y Reclamos?',
    respuesta: 'El número de contacto al que debes comunicarte es el +54 9 2954 534751.',
  },
  {
    titulo: '¿En caso de Extravío o Robo de mi Tarjeta ¿Qué debo hacer?',
    respuesta:
      'Podés denunciar el extravío o robo de tu tarjeta en nuestra aplicación Tarjeta Pampeana, Autogestión Telefónica: +54 9 2953 452072, o en el portal de Autogestión: https://online.pampeana.com.ar/login.php.',
  },
  {
    titulo: '¿Cómo puedo Extraer dinero de los Cajeros Automáticos?(Cajeros Automáticos Link únicamente)',
    respuesta:
      'Para retirar dinero, recordá que tu clave inicial son los últimos 4 dígitos de tu DNI. Luego indicás el monto a retirar y tendrás la opción de abonar en las cuotas que indiques. En el próximo mes se verá reflejado en tu resumen de cuenta.',
  },
];

export default PreguntasFrecuentes;
