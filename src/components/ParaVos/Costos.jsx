import { useState, useEffect } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import { API_VARIABLES_TARJ, API_PREST_PARAM } from '../constants/apis';

const Costos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [tarjetasData, setTarjetasData] = useState({});
  const [prestamosData, setPrestamosData] = useState({});

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const cargarVariablesTarjetas = async () => {
      try {
        const response = await fetch(API_VARIABLES_TARJ);
        const data = await response.json();
        setTarjetasData(data);
       // console.log('Tarjetas Data:', data); // Verifica la respuesta de la API
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const cargarVariablesPrestamos = async () => {
      try {
        const response = await fetch(API_PREST_PARAM);
        const data = await response.json();
        setPrestamosData(data);
        //console.log('Prestamos Data:', data); // Verifica la respuesta de la API
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    cargarVariablesTarjetas();
    cargarVariablesPrestamos();
  }, []);

  return (
    <div className="container bg-purple-50 min-w-full pt-14">
      <hr className="h-px my-8 bg-pruple-200 border-0 dark:bg-purple-300"></hr>
      <section className="mx-auto px-8 py-8 ">
        <h2 className="text-2xl font-semibold mb-4" id="costos">
          Nuestros Costos
        </h2>
        <div className="accordion">
          <div className="space-y-4">
            <button
              onClick={toggleAccordion}
              className="flex justify-between items-center w-full text-left bg-gray-200 py-2 px-4 rounded-md shadow-sm hover:bg-gray-200"
            >
              <span>¡Hacé click para ver los costos!</span>
              <FaChevronDown className={`${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && (
              <div className="bg-gray-50 p-4 rounded-md shadow-md mt-4">
                <ul className="space-y-2">
                  <li>
                    Las tasas de interés, comisiones y cargos informados en esta oportunidad, corresponden a las
                    vigentes del período comprendido entre el {tarjetasData.cierre_dia}/{tarjetasData.cierre_mes}/
                    {tarjetasData.cierre_anio} hasta el {tarjetasData.proximo_dia}/{tarjetasData.proximo_mes}/{' '}
                    {tarjetasData.proximo_anio}.
                  </li>
                  <li>Cargo por uso de cajero automático Red Link $ {tarjetasData.comision_redlink} + I.V.A.*</li>
                  <li>
                    Cargo consulta aceptada por cajero automático Red Link $ {tarjetasData.cargo_consulta_aceptada} +
                    I.V.A.*
                  </li>
                  <li>
                    Cargo por consulta rechazada por cajero automático Red Link ${' '}
                    {tarjetasData.cargo_transaccion_rechazada} + I.V.A.*
                  </li>
                  <li>
                    Comisión por servicio de renovación anual «Paquete Clásico» $ {tarjetasData.comision_renovacion} +
                    I.V.A.* en dos (2) cuotas iguales mensuales y consecutivas de $2499,99 + I.V.A.*
                  </li>
                  <li>Comisión por servicio de renovación anual «Paquete Premium» $ 0 + I.V.A. (100% BONIFICADA)</li>
                  <li>Comisión por servicio de renovación anual «Paquete Gold» $ 0 + I.V.A. (100% BONIFICADA)</li>
                  <li>
                    Comisión por servicio de renovación anual «Paquete Corporativo $999,99 + I.V.A. (100% BONIFICADA)
                  </li>
                  <li>
                    Tasa de interés financiero: T.N.A. {tarjetasData.tna_interes_periodo_actual}%, T.E.M.
                    {tarjetasData.tem_interes_periodo_actual}%, T.E.A. {tarjetasData.tea_interes_periodo_actual} %.
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
                    <h4>Tasa de interés punitorio: C.F.T. {tarjetasData.interes_punitorio_pesos_cft_actual} %**</h4>
                  </li>
                  <li className="font-semibold">
                    <h4>Tasa de interés Préstamos Personales sin garantía real: C.F.T. {prestamosData.cft_fin}%</h4>
                  </li>
                  <br />
                  <li>
                    Las tasas de interés de Préstamos Personales entrarán en vigencia desde el 1 de{' '}
                    {prestamosData.tasa_interes_prestamos_personales_mes}Agosto de 2024.
                  </li>
                  <li>
                    (*) Las comisiones y cargos informados se encuentran sujetos a modificaciones de conformidad a la
                    normativa aplicable.
                  </li>
                  <li>
                    (**) Las diferentes tasas de interés informadas, sufrirán las modificaciones mensuales pertinentes
                    según normativa del Banco Central de la República Argentina.
                  </li>
                  <li>
                    (***) Las comisiones y cargos informados se encuentran sujetos a modificaciones de conformidad a la
                    normativa aplicable.
                  </li>
                  <li>
                    <a
                      href="/contrato/AUMENTO FEBRERO 2025.pdf"
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      30/10/2024 - Notificación Aumento de Cargos y Comisiones a aplicarse en Febrero
                    </a>
                  </li>
                  <li>
                    <a
                      href="/contrato/AUMENTO AGOSTO 2024.pdf"
                      target="_blank"
                      className="text-blue-500 hover:underline"
                    >
                      24/04/2024 - Notificación aumento de comisiones a aplicarse en Agosto 2024
                    </a>
                  </li>
                  <li>
                    <a href="/contrato/Comparativos de costos y comisiones.pdf"  target="_blank"
                      className="text-blue-500 hover:underline"> 01/01/2025 - Notificación Comparativos de costos y comisiones</a>
                  </li>
                  <li>
                    <a href="/contrato/aumento-comparativo.pdf"  target="_blank"
                      className="text-blue-500 hover:underline">01/01/2025 - Notificación Nota de aumento con comparativos</a>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>
      <hr className="h-px my-8 bg-pruple-200 border-0 dark:bg-purple-300"></hr>
    </div>
  );
};

export default Costos;
