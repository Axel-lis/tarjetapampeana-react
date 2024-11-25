import { useState } from 'react';
import '../../assets/styles/paquetesAcordion.css';
export const PaquetesAcordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  // Define la tabla de datos
  const dataTable = [
    ['SERVICIOS Y BENEFICIOS', 'PAQUETE CORPORATIVO', 'PAQUETE CLASICO', 'PAQUETE PREMIUM', 'PAQUETE NACIONAL GOLD'],
    ['TARJETA DE CREDITO CLASICA REGIONAL', 'SI', 'SI', 'SI', 'SI'],
    ['TARJETA DE CREDITO ARGENCARD GOLD NACIONAL', 'NO', 'NO', 'NO', 'SI'],
    ['ADICIONALES SIN CARGO', '1', '2', '3', '4'],
    ['LIMITE DE COMPRA MAXIMO', '$500,000.00', '$1,000,000.00', '$1,500,000.00', '$2,000,000.00'],
    ['LIMITE DE COMPRA', '$150,000.00', '$250,000.00', '$300,000.00', '$400,000.00'],
    ['LIMITE DE CUOTAS', '$350,000.00', '$750,000.00', '$1,200,000.00', '$1,600,000.00'],
    ['LIMITE DE PAGO MINIMO', '$150,000.00', '$250,000.00', '$300,000.00', '$400,000.00'],
    ['LIMITE DE COMPRA ARGENCARD', '', '', '$200,000.00', '$200,000.00'],
    ['LIMITE DE CUOTA ARGENCARD', '', '', '', '$800,000.00'],
    ['MANTENIMIENTO MENSUAL DE CUENTA', 'SI', 'SI', 'SI', 'SI'],
    ['COSTO MANTENIMIENTO MENSUAL + IVA', '$4,999.99', '$5,999.99', '$6,999.99', '$7,999.99'],
    ['MANTENIMIENTO DE CUENTA ANUAL', 'BONIFICADO 80%', 'SI', 'BONIFICADO 100%', 'BONIFICADO 100%'],
    ['COSTO RENOVACIÓN ANUAL + IVA', '$999.99', '$4,999.99', '$-', '$-'],
    ['ADELANTO POR CAJERO - DISPONIBLE MAXIMO', '$15,000.00', '$30,000.00', '$45,000.00', '$60,000.00'],
    ['PRESTAMOS PERSONALES MONTO MAXIMO DISPONIBLE', '$150,000.00', 'NO HABILITADO', '$300,000.00', '$600,000.00'],
    ['PRESTAMOS PERSONALES PRE-APROBADOS REVO', '$100,000.00', 'NO HABILITADO', '$150,000.00', '$200,000.00'],
    ['BONIFICACION TASA PRESTAMO', 'NO', 'NO', '-10%', '-20%'],
    [
      'ADHESIÓN DEBITO AUTOMATICO (DAS)',
      'OBLIGATORIO',
      'OPCIONAL',
      'OPCIONAL / CON PRESTAMO OBLIGATORIO',
      'OBLIGATORIO',
    ],
    [
      'OBSERVACIONES',
      'UNICAMENTE HABILITADA PARA CUENTAS EMPRESAS - ENTIDADES - COORPORATIVAS. GRUPO MINIMO 25 CLIENTES.',
      '',
      '',
      '',
    ],
  ];
  const descripciones = [
    '',
    'Es la tarjeta de crédito regional que permite acceder a bonificaciones y reintegros cada día en los comercios adheridos',
    'Tarjeta nacional ARGENCARD utiliza toda la red de comercios Master en todo el país.  Habilitada para usar en mas de 200.000 comercios del país.',
    'Cantidad de Adicionales sin cargo que se pueden agregar en la cuenta. Por Ejemplo: Hijos. Todos utilizan el mismo límite de compra máximo de la cuenta y las operaciones se ven en el mismo resúmen',
    'Es el límite máximo asignado a la cuenta para ser usado por el consumidor. Se actualiza trimestralmente o se puede solicitar ampliación de este límite ingresando en AUTOGESTION.',
    'Es el costo mensual a abonar por mes por tener la posibilidad de usar una tarjeta de crpedito, y varía de acuerdo a la cuenta que tengamos. A más costo mensual, mayores beneficios y límites tendremos a disposición para utilizar como consumidores',
    'El mantenimiento mensual se cobra siempre que tenga movimientos en el mes en la cuenta. Si no hay consumos, ni movimientos y por lo tanto no se emite el resumen del mes, no tiene costo mensual',
    'El mantenimiento de cuenta anual, es el servicio por contar con una tarjeta de crédito, que le permite al usuario tener disponible el uso de dinero en comercios adheridos, y la posibilidad de acceder a otros beneficios conforme el plan de cuenta que tenga. Como el usuario tiene la disponibilidad del dinero mientras tenga vigente su tarjeta, la cual dura tres años, una vez al año se liquida el costo anual devengado durante los doce (12) meses anteriores por el mantenimiento anual de la cuenta; este costo, en Tarjeta Pampeana sólo lo abonan los clientes que tienen la cuenta clásica',
    'Se cobra dividido en 2 cuotas mensuales, consecutivas y sin interés',
    'Podés realizar adelantos de Efectivo en toda la RED DE CAJEROS LINK de la República Argentina con la opción de devolver de 1 a 6 cuotas fijas con un costo financiero',
    'Posibilidad de Acceder a un Préstamo en Efectivo que será depósitado en tu cuenta mediante transferencia y en la misma cuenta se debitará el resumen de la tarjeta en donde se liquidan las cuotas de cada mes. Este límite es diferente para cada tipo de cuenta',
    'La tasa de préstamo vigente, cuenta con bonificaciones especiales que pueden variar cada mes de acuerdo a la politica comercial y/o promociones vigentes. La bonificación también varía según el tipo de cuenta que tengas',
    'La adhesión al débito el algunas cuentas es opcional, pero en otras en Obligatorio. Principalmente si la cuenta tiene préstamos personales solicitados, ya que es necesario para transferir el dinero y realizar el cobro cada mes',
    '',
  ];
  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  // Asigna colores según el índice
  const getHighlightColor = (index) => {
    switch (index) {
      case 0:
        return '#F7BD48'; // PAQUETE NACIONAL GOLD
      case 1:
        return '#e2bcea'; // PAQUETE PREMIUM
      case 2:
        return '#cfe2ff'; // PAQUETE CLÁSICO
      case 3:
        return '#98D419'; // PAQUETE CORPORATIVO
      default:
        return '#FFFFFF';
    }
  };

  return (
    <div>
      <article className="contenedor__ambasTarjetas flex justify-center bg-purple-50 py-8">
        <div className="accordion-container">
          {['PAQUETE CORPORATIVO', 'PAQUETE CLÁSICO', 'PAQUETE PREMIUM', 'PAQUETE NACIONAL GOLD'].map(
            (title, index) => (
              <div key={index} className="accordion-item">
                <button
                  className={`accordion-header ${activeAccordion === index ? 'active' : ''}`}
                  onClick={() => handleAccordionClick(index)}
                >
                  {title} <span className="icon">{activeAccordion === index ? '-' : '+'}</span>
                </button>
                <div className={`accordion-content ${activeAccordion === index ? 'open' : ''}`}>
                  {activeAccordion === index && (
                    <table className="excel-table">
                      <thead>
                        <tr>
                          {dataTable[0].map((header, i) => (
                            <th key={i}>{header}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {dataTable.slice(1).map((row, i) => (
                          <tr key={i}>
                            {row.map((cell, j) => (
                              <td
                                key={j}
                                className={j === index + 1 ? 'header-highlight' : ''}
                                style={j === index + 1 ? { backgroundColor: getHighlightColor(index) } : {}}
                              >
                                {j === 0 ? (
                                  <div className="tooltip">
                                    {cell}
                                    {descripciones[i] && <span className="tooltiptext">{descripciones[i]}</span>}
                                  </div>
                                ) : (
                                  cell
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  )}
                </div>
              </div>
            ),
          )}
        </div>
      </article>
    </div>
  );
};

export default PaquetesAcordion;
