import { FcMoneyTransfer } from 'react-icons/fc';
import { useState, useEffect } from 'react';
import { API_VARIABLES_TARJ, API_PREST_PARAM } from '../constants/apis';
const DefensaConsumidor = () => {
  const [tarjetasData, setTarjetasData] = useState({});
  const [prestamosData, setPrestamosData] = useState({});
  const [fechasInteres, setFechasInteres] = useState('');

  useEffect(() => {
    const cargarVariablesTarjetas = async () => {
      try {
        const response = await fetch(API_VARIABLES_TARJ);
        const data = await response.json();
        setTarjetasData(data);
        console.log('Tarjetas Data:', data); // Verifica la respuesta de la API
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const cargarVariablesPrestamos = async () => {
      try {
        const response = await fetch(API_PREST_PARAM);
        const data = await response.json();
        setPrestamosData(data);
        console.log('Prestamos Data:', data); // Verifica la respuesta de la API
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const actualizarFechasInteres = () => {
      const hoy = new Date();
      const cierreDiciembre = 17;
      let fechaInicio, fechaFin;

      if (hoy.getMonth() === 11 && hoy.getDate() >= 18) {
        fechaInicio = new Date(hoy.getFullYear(), hoy.getMonth(), 18);
        fechaFin = new Date(hoy.getFullYear() + 1, 0, 21);
      } else if (hoy.getMonth() === 11 && hoy.getDate() < 18) {
        fechaInicio = new Date(hoy.getFullYear(), hoy.getMonth() - 1, 22);
        fechaFin = new Date(hoy.getFullYear(), hoy.getMonth(), cierreDiciembre);
      } else if (hoy.getMonth() === 10) {
        fechaInicio = new Date(hoy.getFullYear(), hoy.getMonth(), 22);
        fechaFin = new Date(hoy.getFullYear(), hoy.getMonth() + 1, cierreDiciembre);
      } else {
        fechaInicio = new Date(hoy.getFullYear(), hoy.getMonth() - 1, 22);
        fechaFin = new Date(hoy.getFullYear(), hoy.getMonth(), 21);
      }

      const formatoFecha = (fecha) =>
        ('0' + fecha.getDate()).slice(-2) + '/' + ('0' + (fecha.getMonth() + 1)).slice(-2) + '/' + fecha.getFullYear();

      const texto = `Las tasas de interés, comisiones y cargos informados en esta oportunidad, 
        corresponden a las vigentes del período comprendido entre el ${formatoFecha(fechaInicio)} y el ${formatoFecha(
        fechaFin,
      )}.`;

      setFechasInteres(texto);

      const meses = [
        'enero',
        'febrero',
        'marzo',
        'abril',
        'mayo',
        'junio',
        'julio',
        'agosto',
        'septiembre',
        'octubre',
        'noviembre',
        'diciembre',
      ];

      const mesActual = hoy.getMonth();
      const nombreMesActual = meses[mesActual];
      setPrestamosData((prevData) => ({
        ...prevData,
        tasa_interes_prestamos_personales_mes: nombreMesActual,
      }));
    };

    cargarVariablesTarjetas();
    cargarVariablesPrestamos();
    actualizarFechasInteres();
  }, []);
  return (
    <div className="bg-purple-600 ">
      <div className="max-w-7xl pt-20 mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="p-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Defensa al Consumidor</h2>

            {/* Legal Description Section */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">Información Legal</h3>
              <p className="text-gray-600 leading-relaxed">
                Conforme la normativa que rige las relaciones de consumo, usted puede dirigirse por cualquier reclamo a
                las Oficinas de Defensa del Consumidor de la Provincia de La Pampa, así como a la Ventanilla Única
                Federal de Defensa del Consumidor, y canalizar sus dudas y reclamos mediante las vías de comunicación
                que se informan a continuación.
                <br />
                Asimismo, se le informa, que en caso de realizar un reclamo, podrá realizarlo en la sede administrativa
                y/o judicial de su domicilio real. <br />
                <br />
                <a className="text-sky-600 underline" href="https://defensaconsumidor.lapampa.gob.ar/">
                  Defensa al consumidor Gobierno de La Pampa
                </a>{' '}
                <br />
                <a
                  className="text-sky-600 underline"
                  href="https://www.argentina.gob.ar/servicio/iniciar-un-reclamo-ante-defensa-de-las-y-los-consumidores"
                >
                  Iniciar un reclamo ante defensa de las y los consumidores
                </a>{' '}
                <br />
                <a
                  className="text-sky-600 underline"
                  href="https://www.argentina.gob.ar/produccion/defensadelconsumidor/formulario"
                >
                  {' '}
                  Defensa de las y los Consumidores | Para reclamos Ingrese aquí{' '}
                </a>{' '}
                <br />
                <br />
                <br />
                <strong>Responsabilidad Fiscal :</strong>{' '}
                <a className="text-sky-600 underline" href="http://www.afip.gob.ar/images/f960/DATAWEB.jpg">
                  {' '}
                  Responsabilidad Fiscal AFIP
                </a>
                <br />
                <strong>C.U.I.T.: 30-71452748-3</strong>
              </p>
            </div>

            {/* Costs Section */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-6" id="costos">
                Costos de Servicios
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
                <div className="flex items-start space-x-5">
                  <FcMoneyTransfer className="text-green-500 text-6xl" />
                  <div>
                    <div className="bg-gray-50 p-4 rounded-md shadow-md mt-4">
                      <ul className="space-y-2">
                        <li id="fechas_interes">{fechasInteres}</li>
                        <li>Cargo por uso de cajero automático Red Link $ {tarjetasData.comision_redlink} + I.V.A.*</li>
                        <li>
                          Cargo consulta aceptada por cajero automático Red Link ${' '}
                          {tarjetasData.cargo_consulta_aceptada} + I.V.A.*
                        </li>
                        <li>
                          Cargo por consulta rechazada por cajero automático Red Link ${' '}
                          {tarjetasData.cargo_transaccion_rechazada} + I.V.A.*
                        </li>
                        <li>
                          Comisión por servicio de renovación anual «Paquete Clásico» ${' '}
                          {tarjetasData.comision_renovacion} + I.V.A.* en dos (2) cuotas iguales mensuales y
                          consecutivas de $2499,99 + I.V.A.*
                        </li>
                        <li>
                          Comisión por servicio de renovación anual «Paquete Premium» $ 0 + I.V.A. (100% BONIFICADA)
                        </li>
                        <li>Comisión por servicio de renovación anual «Paquete Gold» $ 0 + I.V.A. (100% BONIFICADA)</li>
                        <li>
                          Comisión por servicio de renovación anual «Paquete Corporativo $999,99 + I.V.A. (100%
                          BONIFICADA)
                        </li>
                        <li>
                          Tasa de interés financiero: T.N.A. {tarjetasData.tna_interes_periodo_actual}%, T.E.M.
                          {tarjetasData.tem_interes_periodo_actual}%, T.E.A. {tarjetasData.tea_interes_periodo_actual}{' '}
                          %.
                        </li>
                        <li>
                          Tasa de interés punitorio T.N.A. {tarjetasData.interes_punitorio_pesos_tna_actual}%, T.E.M.
                          {tarjetasData.interes_punitorio_pesos_tem_actual}%, T.E.A.{' '}
                          {tarjetasData.interes_punitorio_pesos_tea_actual} %.
                        </li>
                        <li>
                          Tasa de interés financiero adelanto en efectivo T.N.A.{' '}
                          {tarjetasData.interes_financiero_pesos_tna_actual}%, T.E.M.{' '}
                          {tarjetasData.interes_financiero_pesos_tem_actual}
                          %, T.E.A. {tarjetasData.interes_financiero_pesos_tea_actual}
                        </li>
                        <li>
                          Tasa de interés Préstamos Personales sin garantía real: T.N.A.
                          {prestamosData.tna_fin}%, T.E.M. {prestamosData.tem_fin}%, T.E.A. {prestamosData.tea_fin}%
                        </li>
                        <br />
                        <li className="font-semibold">
                          <h4>
                            Tasa de interés financiero adelanto en efectivo: C.F.T.{' '}
                            {tarjetasData.interes_financiero_pesos_cft_actual}
                            %**
                          </h4>
                        </li>
                        <li className="font-semibold">
                          <h4>Tasa de interés financiero: C.F.T. {tarjetasData.cft_interes_periodo_actual}%**</h4>
                        </li>
                        <li className="font-semibold">
                          <h4>
                            Tasa de interés punitorio: C.F.T. {tarjetasData.interes_punitorio_pesos_cft_actual} %**
                          </h4>
                        </li>
                        <li className="font-semibold">
                          <h4>
                            Tasa de interés Préstamos Personales sin garantía real: C.F.T. {prestamosData.cft_fin}%
                          </h4>
                        </li>
                        <br />
                        <li>
                          Las tasas de interés de Préstamos Personales entrarán en vigencia desde el 1 de{' '}
                          {prestamosData.tasa_interes_prestamos_personales_mes}Agosto de 2024.
                        </li>
                        <li>
                          (*) Las comisiones y cargos informados se encuentran sujetos a modificaciones de conformidad a
                          la normativa aplicable.
                        </li>
                        <li>
                          (**) Las diferentes tasas de interés informadas, sufrirán las modificaciones mensuales
                          pertinentes según normativa del Banco Central de la República Argentina.
                        </li>
                        <li>
                          (***) Las comisiones y cargos informados se encuentran sujetos a modificaciones de conformidad
                          a la normativa aplicable.
                        </li>
                        <li>
                          <a
                            href="/assets/contrato/NOTA_compressed.pdf"
                            target="_blank"
                            className="text-blue-500 hover:underline"
                          >
                            30/10/2024 - Notificación Aumento de Cargos y Comisiones a aplicarse en Febrero
                          </a>
                        </li>
                        <li>
                          <a
                            href="/assets/contrato/aumento-comisiones.pdf"
                            target="_blank"
                            className="text-blue-500 hover:underline"
                          >
                            24/04/2024 - Notificación aumento de comisiones a aplicarse en Agosto 2024
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Information */}
            <div className="mt-10 p-6 bg-blue-100 rounded-lg">
              <p className="text-sm text-blue-800">
                Nota: Los costos presentados son referencias aproximadas y pueden variar según la complejidad del caso.
                Se recomienda consultar directamente para obtener un presupuesto personalizado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DefensaConsumidor;
