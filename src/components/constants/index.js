import lunesIMG from '../../assets/images/paravos-grid/01.png';
import martesIMG from '../../assets/images/paravos-grid/02.png';
import miercoesIMG from '../../assets/images/paravos-grid/03.png';
import juevesIMG from '../../assets/images/paravos-grid/04.png';
import viernesIMG from '../../assets/images/paravos-grid/06.png';
import sabadoIMG from '../../assets/images/paravos-grid/07.png';
import domingoIMG from '../../assets/images/paravos-grid/08.png';
import semanalIMG from '../../assets/images/paravos-grid/09.png';
import carousel1 from '../../assets/banners/carousel1/carousel1.png';
import carousel2 from '../../assets/banners/carousel1/carousel2.png';
import img0 from '../../assets/banners/carousel-comercios/comerciante-00.jpg';
import img1 from '../../assets/banners/carousel-comercios/comerciante-01.jpg';
import img2 from '../../assets/banners/carousel-comercios/comerciante-02.jpg';
import img3 from '../../assets/banners/carousel-comercios/comerciante-03.jpg';
import img4 from '../../assets/banners/carousel-comercios/comerciante-04.jpg';
import img5 from '../../assets/banners/carousel-comercios/comerciante-05.jpg';
import img6 from '../../assets/banners/carousel-comercios/comerciante-06.jpg';
import img7 from '../../assets/banners/carousel-comercios/comerciante-07.jpg';
import img8 from '../../assets/banners/carousel-comercios/comerciante-08.jpg';
import img9 from '../../assets/banners/carousel-comercios/comerciante-09.jpg';


/* Pagina Principal-->carousel*/
  export const slidesPrincipal = [
    {
      title: '¡Pagá menos y ahorrá más!',
      description: 'Adquerí Pampeana y disfrutá todos los días de promociones increbiles',
      buttonText: 'Pedir tarjeta',
      imgSrc: carousel1,
    },
    {
      title: 'Con tu ¡Paquete Pampeana disfrutás de los mejores beneficios al mejor precio!',
      description:
        'Acceso a Préstamos Personales PampaCa$h .Con tu Paquete Gold tenes bonificado el 100% del costo de tu Renovación Anual e importantes descuentos todos los días de la semana.',
      buttonText: 'Ver Paquetes',
      imgSrc: carousel2,
    },
  ];

/* Para Vos */
export const paraVosPromos = [
  { dia: "LUNES", reintegro: "$20.000", image: lunesIMG },
  { dia: "MARTES", reintegro: "$25.000", image: martesIMG},
  { dia: "MIÉRCOLES", reintegro: "$25.000", image:miercoesIMG },
  { dia: "JUEVES", reintegro: "$45.000", image:juevesIMG },
  { dia: "VIERNES", reintegro: "$25.000", image: viernesIMG},
  { dia: "SÁBADO", reintegro: "$35.000", image:sabadoIMG },
  { dia: "DOMINGO", reintegro: "$10.000", image:domingoIMG },
  { dia: "SEMANAL", reintegro: "$50.000", image: semanalIMG},
];
/* Para tu comercio*/
  export const slidesComecios = [
   img0, img1, img2, img3, img4, img5, img6, img7, img8, img9
  ];
  export const beneficios = [
    {
        title: "Oportunidades Irresistibles",
      description: "Descubre nuestros planes en cuotas y promociones para impulsar tus ventas.",
    },
    {
      title: "¡Creciendo con Inteligencia Financiera!",
      description: "Explorá las ventajas de nuestros planes de cuotas con tasas bonificadas que convierten a Tarjeta Pampeana en la elección destacada para tu comercio.",
    },
    {
      title: "Descubre Nuestra Atención Personalizada",
      description: "Con asesores comerciales, un equipo de ventas y marketing, podemos brindarte la mejor solución para tus necesidades comerciales, operativas y técnicas.",
    },
    {
      title: "Publicidad: Destaca tu Marca",
      description: "Potenciá la visibilidad de tu marca al aparecer en nuestras piezas de comunicación y destacarte en nuestro buscador de promociones.",
    },
    {
      title: "Éxito Compartido",
      description: "Experimentá el éxito de tu negocio al generar cuentas directamente desde tu comercio.",
    },
    {
      title: "Seguridad: Resguarda tu Negocio",
      description: "Protegé tu comercio al eliminar el riesgo asociado con el uso y retención de dinero en efectivo.",
    }
  ];
/* FAQ: PREGUNTAS FRECUENTES */
export const preguntas = [
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
export const preguntasParaVos = [
  {
    titulo: "¿Cuál es el límite de crédito inicial?",
    respuesta: "El límite de crédito inicial está conformado por una evaluación Financiero / Crediticia que se hace sobre cada individuo que solicita su Tarjeta Pampeana o Paquete Premium Gold. Dicho límite es individual y se tienen en cuenta numerosos factores, siguiendo las recomendaciones de los Bureaus de Crédito más reconocidos del país y BCRA. El límite de crédito inicial se verá modificado en función del comportamiento crediticio del titular, así como de diversos factores como nuevos ingresos, aumentos masivos, etc."
  },
  {
    titulo: "¿Tengo un portal de autogestión para poder ver todos mis consumos y operaciones?",
    respuesta: "¡SI! Tarjeta Pampeana cuenta con un moderno Portal de Autogestión que te va a permitir conocer tus límites y disponibles, vencimientos, últimos resúmenes y toda la información de tus productos y operaciones. También te va a permitir realizar solicitudes de préstamo, adhesión a débito automático y muchos más beneficios para disfrutar al máximo de tu tarjeta. Visítalo en: https://online.pampeana.com.ar."
  },
  {
    titulo: "¿Tarjeta Pampeana tiene un Programa de Puntos y Recompensas?",
    respuesta: "¡Por supuesto! Desde Tarjeta Pampeana premiamos que nos elijas cada día y por ello tenemos vigente un exclusivo Plan de Premios & Recompensas que te permite sumar puntos con cada resumen. Podes cambiar tus puntos acumulados fácilmente por los productos que más te gusten de nuestro Catálogo de Premios. Consulta nuestro catálogo en nuestro Portal de Autogestión: https://online.pampeana.com.ar."
  },
  {
    titulo: "¿Dónde puedo ver los comercios adheridos para comprar con Pampeana?",
    respuesta: "Podrás visualizar los comercios adheridos desde el menú superior de la página, en la sección 'Dónde comprar'. Una vez allí debes seleccionar la provincia donde intentes buscar la promoción y luego tendrás una tabla de los locales adheridos."
  },
  {
    titulo: "¿Qué medios de pagos acepta Tarjeta Pampeana?",
    respuesta: "Tarjeta Pampeana acepta como medios de pago: Pampa Pagos, Provincia Net, nuestro Portal de Autogestión y la adhesión a débito automático. Podrás encontrar más información sobre medios de pago aceptados en el menú superior 'Para vos' -> Medios de pago."
  }
];
