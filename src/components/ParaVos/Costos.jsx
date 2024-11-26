import { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
const Costos = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className="container bg-purple-50 ">
      <hr className=" h-px my-8 bg-pruple-200 border-0 dark:bg-purple-300"></hr>
      <section className="mx-auto px-4 py-8">
        <h2 className="text-2xl font-semibold mb-4">Nuestros Costos</h2>
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
                  <li id="fechas_interes"></li>
                  <li>
                    Comisión por administración y mantenimiento del «Paquete Corporativo» ${' '}
                    <span id="comision_corporativo"></span> + I.V.A.*
                  </li>
                  <li>
                    Comisión por administración y mantenimiento del «Paquete Clásico» ${' '}
                    <span id="comision_clasica"></span> + I.V.A.*
                  </li>
                  <li>
                    Comisión por administración y mantenimiento del «Paquete Premium» ${' '}
                    <span id="comision_premium"></span> + I.V.A.*
                  </li>
                  <li>
                    Comisión por administración y mantenimiento de «Paquete Gold» $7999.99{' '}
                    <span id="comision_gold"></span> + I.V.A.*
                  </li>
                  <li>
                    Comisión por reposición o reimpresión de tarjeta $ <span id="comision_reposicion_tarjeta"></span> +
                    I.V.A.*
                  </li>
                  <li>
                    Cargo por uso de cajero automático Red Link $ <span id="cargo_cajero_redlink"></span> + I.V.A.*
                  </li>
                  <li>
                    Cargo consulta aceptada por cajero automático Red Link ${' '}
                    <span id="cargo_consulta_aceptada_redlink"></span> + I.V.A.*
                  </li>
                  <li>
                    Cargo por consulta rechazada por cajero automático Red Link ${' '}
                    <span id="cargo_consulta_rechazada_redlink"></span> + I.V.A.*
                  </li>
                  <li>
                    Comisión por servicio de renovación anual «Paquete Clásico» $ <span id="comision_renovacion"></span>{' '}
                    + I.V.A.* en dos (2) cuotas iguales mensuales y consecutivas de $2499,99 + I.V.A.*
                  </li>
                  <li>Comisión por servicio de renovación anual «Paquete Premium» $ 0 + I.V.A. (100% BONIFICADA)</li>
                  <li>Comisión por servicio de renovación anual «Paquete Gold» $ 0 + I.V.A. (100% BONIFICADA)</li>
                  <li>
                    Comisión por servicio de renovación anual «Paquete Corporativo $999,99 + I.V.A. (100% BONIFICADA)
                  </li>
                  <li>
                    Tasa de interés financiero: T.N.A. <span id="tasa_interes_financiero_tna"></span>%, T.E.M.{' '}
                    <span id="tasa_interes_financiero_tem"></span>%, T.E.A.{' '}
                    <span id="tasa_interes_financiero_tea"></span> %.
                  </li>
                  <li>
                    Tasa de interés punitorio T.N.A. <span id="tasa_interes_punitorio_tna"></span>%, T.E.M.{' '}
                    <span id="tasa_interes_punitorio_tem"></span>%, T.E.A. <span id="tasa_interes_punitorio_tea"></span>{' '}
                    %.
                  </li>
                  <li>
                    Tasa de interés financiero adelanto en efectivo T.N.A.{' '}
                    <span id="tasa_interes_adelanto_efectivo_tna"></span>%, T.E.M.{' '}
                    <span id="tasa_interes_adelanto_efectivo_tem"></span>%, T.E.A.{' '}
                    <span id="tasa_interes_adelanto_efectivo_tea"></span>%.
                  </li>
                  <li>
                    Tasa de interés Préstamos Personales sin garantía real: T.N.A.{' '}
                    <span id="tasa_interes_prestamos_personales_tna"></span>%, T.E.M.{' '}
                    <span id="tasa_interes_prestamos_personales_tem"></span>%, T.E.A.{' '}
                    <span id="tasa_interes_prestamos_personales_tea"></span>%
                  </li>
                  <br />
                  <li className="font-semibold">
                    <h4>
                      Tasa de interés financiero adelanto en efectivo: C.F.T.{' '}
                      <span id="tasa_interes_adelanto_efectivo_cft"></span>%**
                    </h4>
                  </li>
                  <li className="font-semibold">
                    <h4>
                      Tasa de interés financiero: C.F.T.{' '}
                      <span id="tasa_interes_financiero_cft" className="font-semibold"></span> %**
                    </h4>
                  </li>
                  <li className="font-semibold">
                    <h4>
                      Tasa de interés punitorio: C.F.T.{' '}
                      <span id="tasa_interes_punitorio_cft" className="font-semibold"></span> %**
                    </h4>
                  </li>
                  <li className="font-semibold">
                    <h4>
                      Tasa de interés Préstamos Personales sin garantía real: C.F.T.{' '}
                      <span id="tasa_interes_prestamos_personales_cft"></span>%
                    </h4>
                  </li>
                  <br />
                  <li>
                    Las tasas de interés de Préstamos Personales entrarán en vigencia desde el 1 de{' '}
                    <span id="tasa_interes_prestamos_personales_mes">Agosto</span> de 2024.
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
            )}
          </div>
        </div>
      </section>
      <hr className="h-px my-8 bg-pruple-200 border-0 dark:bg-purple-300"></hr>
    </div>
  );
};

export default Costos;
