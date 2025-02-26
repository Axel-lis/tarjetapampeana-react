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
                          <td style={{ backgroundColor: getHighlightColor(0) }}>lim_com_max_corp</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>lim_com_max_clas</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>lim_com_max_prem</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>lim_com_max_gold</td>
                        </tr>
                        <tr className="text-center">
                          <td>Límite de Compra</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>lim_com_corp</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>lim_com_clas</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>lim_com_prem</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>lim_com_gold</td>
                        </tr>
                        <tr className="text-center">
                          <td>Límite de Cuotas</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>lim_cuo_corp</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>lim_cuo_clas</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>lim_cuo_prem</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>lim_cuo_gold</td>
                        </tr>
                        <tr className="text-center">
                          <td>Límite de Pago Mínimo</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>lim_pm_corp</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>lim_pm_clas</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>lim_pm_prem</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>lim_pm_gold</td>
                        </tr>
                        <tr className="text-center">
                          <td>Adelanto por Cajero - Disponible Máximo</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>adel_caj_corp</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>adel_caj_clas</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>adel_caj_prem</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>adel_caj_gold</td>
                        </tr>
                        <tr className="text-center">
                          <td>Préstamos Personales Monto Máximo</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>prest_max_corp</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>NO HABILITADO</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>prest_max_prem</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>prest_max_gold</td>
                        </tr>
                        <tr className="text-center">
                          <td>Préstamos Personales Pre-Aprobados</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>prest_pre_corp</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>NO HABILITADO</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>prest_pre_prem</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>prest_pre_gold</td>
                        </tr>
                        <tr className="text-center">
                          <td>Bonificación Tasa Préstamo</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>NO</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>NO</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>SÍ</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>SÍ</td>
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
                          <td style={{ backgroundColor: getHighlightColor(0) }}>comision_comun</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>comision_preferencial</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>comision_premium</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>comision_gold</td>
                        </tr>
                        <tr className="text-center">
                          <td>Costo Renovación Anual + IVA</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>renov_corp</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>renov_clas</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>SIN COSTO</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>SIN COSTO</td>
                        </tr>
                        <tr className="text-center">
                          <td>Reposición Tarjeta por Robo o Extravío</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>renov_corp</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>renov_clas</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>renov_prem</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>renov_gold</td>
                        </tr>
                        <tr className="text-center">
                          <td>Comisión Uso Cajeros Red Link</td>
                          <td style={{ backgroundColor: getHighlightColor(0) }}>comision_redlink</td>
                          <td style={{ backgroundColor: getHighlightColor(1) }}>comision_redlink</td>
                          <td style={{ backgroundColor: getHighlightColor(2) }}>comision_redlink</td>
                          <td style={{ backgroundColor: getHighlightColor(3) }}>comision_redlink</td>
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
