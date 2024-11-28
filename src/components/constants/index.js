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
import carousel3 from '../../assets/banners/carousel1/carousel3.png';
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
    {
      title: 'PampaCa$h Prestamos Personales',
      description:
        'Pedí tu préstamo hoy mismo y obtené importantes descuentos todos los días de la semana.',
      buttonText: 'Solicitá tu préstamo',
      imgSrc: carousel3,
    }
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
  export const requisitosComercios = [
    {
  "Requisitos": {
    "Identidad del Titular del Comercio o de su Representante": {
      "Documentos Aceptados": [
        "DNI",
        "CI",
        "LE",
        "LC",
        "Pasaporte"
      ],
      "Sociedades": "En caso de tratarse de una sociedad, el documento corresponderá al representante legal de la misma."
    },
    "Cuenta Bancaria para Acreditación": {
      "Detalles": [
        "Número y tipo de cuenta (si es caja de ahorro o cuenta corriente)",
        "Número de sucursal, sello o membrete del Banco y número de CBU"
      ],
      "Documentación Requerida": [
        "AFIP: Constancia de inscripción",
        "Rentas de Provincia: Comprobante de inscripción",
        "En caso de estar inscripto bajo Convenio Multilateral: Presentar el formulario CM01",
        "Habilitación Municipal"
      ]
    },
    "Documentación Respaldo de Situación Patrimonial y/o Impositiva": {
      "Opciones": [
        "DDJJ de Ganancias",
        "DDJJ de IVA"
      ],
      "Exenciones": "En caso de exenciones, adjuntar las constancias correspondientes."
    },
    "Adicionales": {
      "Personas Jurídicas (Sociedades)": {
        "Documentos": [
          "Contrato Social",
          "Actas societarias que acrediten los mandatos vigentes"
        ],
        "Representante no Designado": "En caso de que quien firme la solicitud de adhesión no esté designado en el contrato social como firmante o administrador, deberá presentar el poder que lo habilite."
      },
      "Profesionales - Independientes": {
        "Requisito": "Carné profesional",
        "Alternativa": "Si no contara con este requisito, podrá presentar copia del título profesional."
      }
    }
  },
  "Nota": "El comercio deberá contar en su local con terminal de captura POSNET, CIOVER o PAYWAY para poder operar con Tarjeta Pampeana.",
  "Contacto": {
    "Centro de Atención": "comercios@tarjetapampeana.com.ar"
  }
}
  ]
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
export const preguntasComercios = [
  {
    "titulo": "¿Cómo Adhiero mi comercio?",
    "respuesta": "Hace CLICK AQUÍ Esto te llevará a un formulario que deberás rellenar para comenzar la adhesión de tu Comercio a Tarjeta Pampeana."
  },
  {
    "titulo": "¿Qué planes de venta puedo sumar a mi comercio?",
    "respuesta": "Contamos con varias opciones de Planes de Financiación hasta en 30 cuotas. También hay Promociones especiales durante todo el año en donde generamos acciones comerciales para impulsar las ventas en los diferentes rubros. También contamos con Descuentos Extraordinarios cada día de la semana en un rubro diferente, en donde se le realizan reintegros a los clientes y donde el comercio no tiene costo extra."
  },
  {
    "titulo": "¿Cómo se hace la presentación de Cupones?",
    "respuesta": "Automáticamente (Sistema Pos). Es imprescindible realizar el cierre de lote a través de su terminal de captura de datos diariamente para que se realice la liquidación de las ventas."
  },
  {
    "titulo": "¿Tienen sistema de Autogestión para Comercios?",
    "respuesta": "Sí. Podes acceder mediante www.online.pampeana.com.ar"
  },
  {
    "titulo": "¿Cómo puedo cobrar mis liquidaciones?",
    "respuesta": "Cada comercio podrá optar por diferentes modalidades de cobro de sus liquidaciones adaptándose a las necesidades de cada uno. Pudiendo cobrar cada 7 o 30 días mediante transferencia bancaria. Cada Plazo de pago tiene una tasa de adelanto de fondos diferentes."
  },
  {
    "titulo": "¿Cuándo se pagan las liquidaciones de mis ventas?",
    "respuesta": "Se pagan en días hábiles pactados oportunamente desde la fecha de presentación. Acreditaremos en su cuenta bancaria el total neto de arancel, retenciones impositivas e intereses si correspondiera, de las operaciones presentadas y aceptadas hasta el cierre del mes anterior."
  },
  {
    "titulo": "¿Puedo solicitar un Préstamo para Capital de Trabajo?",
    "respuesta": "Si, una vez transcurrido 6 meses de estar operando con Tarjeta Pampeana en su comercio, podrá solicitar un préstamo de capital de trabajo para invertir en su negocio y hacerlo crecer. Mediante la página web ó directamente en la aplicación de consultas de las liquidaciones verá la opción disponible."
  },
  {
    "titulo": "¿Dónde puedo comunicarme por consultas o sugerencia?",
    "respuesta": "Envíenos una sugerencia, comentario o consulta vía mail a: comercios@tarjetapampeana.com.ar"
  }
];

/* Centros de atención */
export const centrosDeAtencion = [
{
    "nombre": "Alpachiri",
    "direccion": "Alberdi Nro. 45",
    "telefono": "02954-665303",
    "ubicacion": {
      "lat": -37.375265177510805,
      "lng": -63.77341369814443
    },
    "provincia": "La Pampa"
  },
  {
    "nombre": "Anguil",
    "direccion": "B.Mitre Nº 365",
    "telefono": "02954-4377613",
    "ubicacion": {
      "lat": -36.52908891896335,
      "lng": -64.0126011671645
    },
    "provincia": "La Pampa"
  },
  {
    "nombre": "Bernasconi",
    "direccion": "Arturo Nuñez Nº 87",
    "telefono": "02954-309810",
    "ubicacion": {
      "lat": -37.90577033311364,
      "lng": -63.74434406118936
    },
    "provincia": "La Pampa"
  },
  {
    "nombre": "Catriló",
    "direccion": "Víctor del Carril Nº 321",
    "telefono": "02954-665347",
    "ubicacion": {
      "lat": -36.40680323303504,
      "lng": -63.42360678301043
    },
    "provincia": "La Pampa"
  },
  {
    "nombre": "Cañada de Gómez",
    "direccion": "Sarmiento Esquina Balcarce",
    "telefono": "2924 42-0237",
    "ubicacion": {
      "lat": -32.822075273637665,
      "lng": -61.39228323289733
    },
    "provincia": "Santa Fe"
  },
  {
    "nombre": "Colonia Barón",
    "direccion": "4 de Febrero y Don Bosco",
    "telefono": "02954-309814",
    "ubicacion": {
      "lat": -36.40680323303504,
      "lng": -63.42360678301043
    },
    "provincia": "La Pampa"
  },
  {
    "nombre": "Doblas",
    "direccion": "Astrain y Uruguay",
    "telefono": "02954-665346",
    "ubicacion": {
      "lat": -37.150909443360845,
      "lng": -64.01077222531505
    },
    "provincia": "La Pampa"
  },
  {
    "nombre": "Eduardo Castex",
    "direccion": "9 de Julio & Italia",
    "telefono": "02954-524116",
    "ubicacion": {
      "lat": -35.914486072506364,
      "lng": -64.3009560189689
    },
    "provincia": "La Pampa"
  },
  {
    "nombre": "Embajador Martini",
    "direccion": "Avenida San Martín 154",
    "telefono": "2302-520894",
    "ubicacion": {
      "lat": -35.38658991950427,
      "lng": -64.28717495946792
    },
    "provincia": "La Pampa"
  },
  {
    "nombre": "General Acha",
    "direccion": "Balcarce Nº 745",
    "telefono": "02954-743864",
    "ubicacion": {
      "lat": -37.37691806060505,
      "lng": -64.59960546686389
    },
    "provincia": "La Pampa"
  },
  {
    "nombre": "General Campos",
    "direccion": "9 de Julio Nº 365",
    "telefono": "02954-534745",
    "ubicacion": {
      "lat": -37.4584878555735,
      "lng": -63.5861232170311
    },
    "provincia": "La Pampa"
  },
  {
    "nombre": "General Pico",
    "direccion": "Calle 16 Nº 735",
    "telefono": "02954-309813",
    "ubicacion": {
      "lat": -35.66236652198197,
      "lng": -63.75617370495082
    },
    "provincia": "La Pampa"
  },
  {
    "nombre": "Guatraché",
    "direccion": "9 De Julio Nº 30",
    "telefono": "02954-403898",
    "ubicacion": {
      "lat": -37.66717076467226,
      "lng": -63.5342060188754
    },
    "provincia": "La Pampa"
  },
  {
    "nombre": "La Maruja",
    "direccion": "Rubén H. Marín 402",
    "telefono": "02954-403898",
    "ubicacion": {
      "lat": -35.673875694772256,
      "lng": -64.93864927479898
    },
    "provincia": "La Pampa"
  },
  {
    "nombre": "Lonquimay",
    "direccion": "Italia Nº 616",
    "telefono": "02335-499155",
    "ubicacion": {
      "lat": -36.468027788052616,
      "lng": -63.62131712900153
    },
    "provincia": "La Pampa"
  },
  {
    "nombre": "Macachín",
    "direccion": "Fratini 255",
    "telefono": "2954-534744",
    "ubicacion": {
      "lat": -37.14621071253302,
      "lng": -63.666841261507265
    },
    "provincia": "La Pampa"
  },
  {
    "nombre": "Miguel Riglos",
    "direccion": "Moreno Nº 275",
    "telefono": "02954-663470",
    "ubicacion": {
      "lat": -36.856960345588064,
      "lng": -63.687353172320734
    },
    "provincia": "La Pampa"
  },
  {
    "nombre": "Quemú Quemú",
    "direccion": "25 de Mayo N° 21",
    "telefono": "02954-665316",
    "ubicacion": {
      "lat": -36.056805800250956,
      "lng": -63.56944183636956
    },
    "provincia": "La Pampa"
  },
  {
    "nombre": "Rolón",
    "direccion": "Libertad y España",
    "telefono": "02954-469019",
    "ubicacion": {
      "lat": -37.167238867358996,
      "lng": -63.416759868351335
    },
    "provincia": "La Pampa"
  },
  {
    "nombre": "Trelen",
    "direccion": "Sarmiento Esq. Ameghino",
    "telefono": "02954-612620",
    "ubicacion": {
      "lat": -35.699120998190644,
      "lng": -64.12934461712459
    },
    "provincia": "La Pampa"
  },
  {
    "nombre": "Winifreda",
    "direccion": "Rivadavia N°239",
    "telefono": "02954-737655",
    "ubicacion": {
      "lat": -36.22643126601049,
      "lng": -64.23528631534603
    },
    "provincia": "La Pampa"
  },
  {
    "nombre": "30 de Agosto",
    "direccion": "San martín y Laprida",
    "telefono": "02954-309811",
    "ubicacion": {
      "lat": -37.12351492294405,
      "lng": -64.51458941487257
    },
    "provincia": "Buenos Aires"
  },
  {
    "nombre": "Casbas",
    "direccion": "Belgrano 543",
    "telefono": "02954-15612635",
    "ubicacion": {
      "lat": -36.75657964697103,
      "lng": -62.505699445905364
    },
    "provincia": "Buenos Aires"
  },
  {
    "nombre": "Darregueira",
    "direccion": "Sarmiento 73",
    "telefono": "2924 42-02372",
    "ubicacion": {
      "lat": -37.687391200952504,
      "lng": -63.15876000195682
    },
    "provincia": "Buenos Aires"
  },
  {
    "nombre": "Pellegrini",
    "direccion": "Alsina Nº 14",
    "telefono": "02954-363563",
    "ubicacion": {
      "lat": -36.269478122451844,
      "lng": -63.16280290360423
    },
    "provincia": "Buenos Aires"
  },
    {
        "title": "Rivera",
        "coordinates": [-37.16116232259926, -63.246936999800795],
        "address": "Teodoro Hertzel y Los Colonizadores",
        "phone": "02954-534749",
        "province": "Buenos Aires"
    },
    {
        "title": "Salliquelo",
        "coordinates": [-36.75307998373185, -62.957532274742114],
        "address": "Unzue Nº 230",
        "phone": "02954-1536-4036",
        "province": "Buenos Aires"
    },
    {
        "title": "Tres Lomas",
        "coordinates": [-36.45576903673056, -62.86350883243093],
        "address": "Alberdi Nº 276",
        "phone": "02954-403906",
        "province": "Buenos Aires"
    },
    {
        "title": "Villa Iris",
        "coordinates": [-38.171498768641484, -63.23799248262902],
        "address": "Stroeder 179",
        "phone": "2953-412768",
        "province": "Buenos Aires"
    },
    {
        "title": "Villa Maza",
        "coordinates": [-36.801218582223875, -63.338241196599675],
        "address": "Italia N° 344",
        "phone": "02954-368131",
        "province": "Buenos Aires"
    },
    {
        "title": "Monte Maíz",
        "coordinates": [-33.20450415871806, -62.6021244325972],
        "address": "9 de Julio 1673",
        "phone": "3468 510294",
        "province": "Córdoba"
    },
    {
        "title": "Leones",
        "coordinates": [-32.66266633474534, -62.296739703787196],
        "address": "Avenida Libertador 970",
        "phone": "3472-585845",
        "province": "Córdoba"
    },
     {
    "nombre": "Rivera",
    "direccion": "Teodoro Hertzel y Los Colonizadores",
    "telefono": "02954-534749",
    "ubicacion": {
      "lat": -37.16116232259926,
      "lng": -63.246936999800795
    },
    "provincia": "Buenos Aires"
  },
  {
    "nombre": "Salliqueló",
    "direccion": "Unzue Nº 230",
    "telefono": "02954-1536-4036",
    "ubicacion": {
      "lat": -36.75307998373185,
      "lng": -62.957532274742114
    },
    "provincia": "Buenos Aires"
  },
  {
    "nombre": "Tres Lomas",
    "direccion": "Alberdi Nº 276",
    "telefono": "02954-403906",
    "ubicacion": {
      "lat": -36.45576903673056,
      "lng": -62.86350883243093
    },
    "provincia": "Buenos Aires"
  },
  {
    "nombre": "Villa Iris",
    "direccion": "Stroeder 179",
    "telefono": "2953-412768",
    "ubicacion": {
      "lat": -38.171498768641484,
      "lng": -63.23799248262902
    },
    "provincia": "Buenos Aires"
  },
  {
    "nombre": "Villa Maza",
    "direccion": "Italia N° 344",
    "telefono": "02954-368131",
    "ubicacion": {
      "lat": -36.801218582223875,
      "lng": -63.338241196599675
    },
    "provincia": "Buenos Aires"
  },
  {
    "nombre": "Monte Maíz",
    "direccion": "9 de Julio 1673",
    "telefono": "3468 510294",
    "ubicacion": {
      "lat": -33.20450415871806,
      "lng": -62.6021244325972
    },
    "provincia": "Córdoba"
  },
  {
    "nombre": "Leones",
    "direccion": "Avenida Libertador 970",
    "telefono": "3472-585845",
    "ubicacion": {
      "lat": -32.66266633474534,
      "lng": -62.296739703787196
    },
    "provincia": "Córdoba"
  }
];