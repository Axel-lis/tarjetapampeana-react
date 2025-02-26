import { useState } from 'react';
import '../../assets/styles/paquetesAcordion.css';

export const PaquetesAcordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveAccordion(index === activeAccordion ? null : index);
  };

  const getHighlightColor = (columnIndex) => {
    switch (columnIndex) {
      case 0:
        return '#ccffcc';
      case 1:
        return '#ccccff';
      case 2:
        return '#dddddd';
      case 3:
        return '#f1f1f1';
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
                  style={{ backgroundColor: '#6024EE' }}
                >
                  {title} <span className="icon">{activeAccordion === index ? '-' : '+'}</span>
                </button>
                <div className={`accordion-content ${activeAccordion === index ? 'open' : ''}`}>
                  {activeAccordion === index && (
                    <table className="excel-table">
                      <thead>
                        <tr>
                          <th>SERVICIOS Y BENEFICIOS</th>
                          <th>PAQUETE CORPORATIVO</th>
                          <th>PAQUETE CLÁSICO</th>
                          <th>PAQUETE PREMIUM</th>
                          <th>PAQUETE NACIONAL GOLD</th>
                        </tr>
                      </thead>
                      <tbody className="text-center table-striped">
                        <tr>
                          <td>Tarjeta de Crédito Clásica Regional</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>SI</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>SI</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>SI</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>SI</td>
                        </tr>
                        <tr>
                          <td>Adicionales sin cargo</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>1</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>2</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>3</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>4</td>
                        </tr>
                        <tr>
                          <td>Tarjeta de Crédito ArgenCard Gold Nacional</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>NO</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>NO</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>NO</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>SI</td>
                        </tr>
                        <tr className="table-success highlight-green">
                          <td>Límite de Compra Máximo</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>$500,000.00</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>$1,500,000.00</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>$2,000,000.00</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>$3,000,000.00</td>
                        </tr>
                        <tr className="text-center">
                          <td>Límite de Compra</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>$150,000.00</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>$300,000.00</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>$450,000.00</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>$600,000.00</td>
                        </tr>
                        <tr className="text-center">
                          <td>Límite de Cuotas</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>$350,000.00</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>$1,200,000.00</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>$1,550,000.00</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>$2,400,000.00</td>
                        </tr>
                        <tr className="text-center">
                          <td>Límite de Pago Mínimo</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>$150,000.00</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>$300,000.00</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>$450,000.00</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>$600,000.00</td>
                        </tr>
                        <tr className="text-center">
                          <td>Adelanto por Cajero - Disponible Máximo</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>$20,000.00</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>$40,000.00</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>$60,000.00</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>$80,000.00</td>
                        </tr>
                        <tr className="text-center">
                          <td>Préstamos Personales Monto Máximo</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>$250,000.00</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>NO HABILITADO</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>$750,000.00</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>$1,000,000.00</td>
                        </tr>
                        <tr className="text-center">
                          <td>Préstamos Personales Pre-Aprobados</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>$150,000.00</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>NO HABILITADO</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>$300,000.00</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>$500,000.00</td>
                        </tr>
                        <tr className="text-center">
                          <td>Bonificación Tasa Préstamo</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>NO</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>NO</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>-10%</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>-20%</td>
                        </tr>
                        <tr className="text-center">
                          <td>Límite de Compra ArgenCard Nacional</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>NO</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>NO</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>NO</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>$250,000.00</td>
                        </tr>
                        <tr className="text-center">
                          <td>Límite de Cuotas ArgenCard Nacional</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>NO</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>NO</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>NO</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>$1,200,000.00</td>
                        </tr>
                        <tr className="text-center">
                          <td>Mantenimiento Mensual de Cuenta</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>SI</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>SI</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>SI</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>SI</td>
                        </tr>
                        <tr className="text-center">
                          <td>Costo Mantenimiento Mensual + IVA</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>$7,499.99</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>$8,999.99</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>$10,499.00</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>$11,999.00</td>
                        </tr>
                        <tr className="text-center">
                          <td>Costo Renovación Anual + IVA</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>$1,199.99</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>$5,999.99</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>SIN COSTO</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>SIN COSTO</td>
                        </tr>
                        <tr className="text-center">
                          <td>Reposición Tarjeta por Robo o Extravío</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>$11,999.99</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>$11,999.99</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>$11,999.99</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>$11,999.99</td>
                        </tr>
                        <tr className="text-center">
                          <td>Comisión Uso Cajeros Red Link</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>$499.99</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>$499.99</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>$499.99</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>$499.99</td>
                        </tr>
                        <tr className="text-center">
                          <td>Adhesión Débito Automático (DAS)</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>OBLIGATORIO</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>OPCIONAL</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>OPCIONAL/<br />PRÉSTAMO OBLIGATORIO</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>OBLIGATORIO</td>
                        </tr>
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
