const ProteccionDatos = () => {
  return (
    <div className="bg-purple-600 pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">Protección de Datos</h1>

          <section className="menu mb-8">
            <h3 className="text-lg font-semibold mb-4">Anclas de Protección de Datos</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>
                <a href="#introduccion" className="text-blue-600 hover:underline">
                  Introducción
                </a>
              </li>
              <li>
                <a href="#objetivo" className="text-blue-600 hover:underline">
                  Objetivo
                </a>
              </li>
              <li>
                <a href="#alcance" className="text-blue-600 hover:underline">
                  Alcance
                </a>
              </li>
              <li>
                <a href="#alineamiento" className="text-blue-600 hover:underline">
                  Alineamientos y Regulaciones
                </a>
              </li>
              <li>
                <a href="#definiciones" className="text-blue-600 hover:underline">
                  Definiciones Conceptuales de los Datos/Información
                </a>
              </li>
              <li>
                <a href="#tratamiento" className="text-blue-600 hover:underline">
                  Tratamiento de los Datos Personales/Información
                </a>
              </li>
              <li>
                <a href="#derecho-titulares" className="text-blue-600 hover:underline">
                  Derecho de los Titulares de los Datos/Información
                </a>
              </li>
              <li>
                <a href="#entrega-acceso" className="text-blue-600 hover:underline">
                  Entrega/Acceso de Información Personal a Proveedores de Servicios
                </a>
              </li>
              <li>
                <a href="#proteccion-datos" className="text-blue-600 hover:underline">
                  Protección De Los Datos Personales
                </a>
              </li>
              <li>
                <a href="#vigencia" className="text-blue-600 hover:underline">
                  Vigencia de la Utilización/Tratamiento de los Datos
                </a>
              </li>
              <li>
                <a href="#modificaciones" className="text-blue-600 hover:underline">
                  Modificación a la Política de Protección/Privacidad y Tratamiento de Datos Personales
                </a>
              </li>
              <li>
                <a href="#aceptacion" className="text-blue-600 hover:underline">
                  Aceptación de la Política de Protección/Privacidad y Tratamiento de Datos Personales
                </a>
              </li>
              <li>
                <a href="#mecanismos" className="text-blue-600 hover:underline">
                  Mecanismos de Actualización
                </a>
              </li>
              <li>
                <a href="#datos" className="text-blue-600 hover:underline">
                  Datos Del Responsable De Tratamiento De Datos
                </a>
              </li>
            </ul>
          </section>

          {/* Secciones con contenido */}
          <section id="introduccion" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Introducción</h2>
            <p className="text-gray-700">
              La confianza y fidelidad de los clientes, y el prestigio en el mercado en que se desarrollan las
              actividades de Tarjeta Pampeana S.A., se generan y consolidan estandarizando...
            </p>
          </section>

          <section id="objetivo" className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Objetivo</h2>
            <p className="text-gray-700">
              Establecer los lineamientos y estándares para la Protección y Privacidad de los Datos personales de los
              Directores, Socios, Empleados, Clientes y Proveedores de Tarjeta Pampeana S.A...
            </p>
          </section>

          <section id="alcance" className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Alcance</h3>
            <p className="text-gray-600">
              Afecta a todo el manejo de información confidencial perteneciente a Tarjeta Pampeana S.A., sus Directores,
              Socios, Empleados, Clientes, Proveedores y/o Terceros, por lo que abarca a toda la organización y personas
              directa o indirectamente involucradas con ella y por los canales que fuere: físicos y/o virtuales como
              ser: nuestro sitio web www.tarjetapampeana.com.ar y/o https://online.pampeana.com.ar/ y/o nuestra app
              móvil.
            </p>
          </section>

          <section id="alineamiento" className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Alineamientos y Regulaciones</h3>
            <p className="text-gray-600 mb-4">
              La presente política se encuentra alineada con los siguientes principios, regulaciones, estándares y
              mejores prácticas:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>Ley 25.326 de Habeas Data de la República Argentina.</li>
              <li>Com. 4609 del Banco Central de la República Argentina.</li>
              <li>Normas ISO 27017 - Controles de Seguridad para servicios Nube/Cloud.</li>
              <li>Norma ISO 27018 - Protección de Información Personal en la Nube/Cloud.</li>
            </ul>
          </section>

          <section id="definiciones" className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Definiciones Conceptuales de los Datos/Información
            </h3>
            <p className="text-gray-600 mb-4">
              Acorde a la relación que el titular de los datos tenga con Tarjeta Pampeana S.A., la información que ésta
              recopila y/o almacena en forma personal y/o a través de terceros puede revestir el siguiente
              carácter/clasificación:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                <strong>Datos privados:</strong> son aquellos que por su naturaleza íntima o reservada sólo son
                relevantes para el titular, como nivel de ingresos, información comercial, datos financieros, capacidad
                de endeudamiento, entre otros.
              </li>
              <li>
                <strong>Datos sensibles:</strong> son aquellos datos más íntimos y sensibles de su titular, cuyo
                tratamiento inadecuado puede generar discriminación o perjuicios graves, como datos biométricos o
                relacionados con la salud.
              </li>
              <li>
                <strong>Datos públicos:</strong> son los datos que no son privados, como nombre, tipo y número de
                documento de identidad, estado civil, profesión, ocupación, y domicilio comercial/real.
              </li>
            </ul>
          </section>

          <section id="tratamiento" className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Tratamiento de los Datos Personales/Información
            </h3>
            <p className="text-gray-600 mb-4">
              Tarjeta Pampeana S.A. utilizará la información que posea sólo para los fines autorizados e informados al
              titular de los datos y a aquellos señalados en la presente política. El tratamiento deberá siempre
              obedecer a un fin legítimo y proporcional de acuerdo a la vinculación con el titular de los
              datos/información. Los datos podrán utilizarse para las siguientes actividades:
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-2">
              <li>
                Compartir información con aliados estratégicos relacionados con tarjetas de crédito, medios de pago,
                gestión de reclamos, y evaluaciones de perfil de clientes.
              </li>
              <li>
                Compartir y consultar datos del comportamiento crediticio y financiero con centrales de información y
                riesgos.
              </li>
              <li>Transmitir datos personales para fidelización, captación, y estudios de mercado.</li>
              <li>Gestionar reclamaciones relacionadas con productos contratados o atención de los mismos.</li>
              <li>Ejercer defensas en procesos judiciales que se generen contra la empresa.</li>
              <li>Ser contactado para ofertas comerciales e información publicitaria.</li>
              <li>Estudiar comportamiento digital para asesoría integral y perfilamiento de intereses.</li>
              <li>Cumplir con obligaciones legales y normativas.</li>
            </ul>
          </section>
          <section id="derecho-titulares" className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Derecho de los Titulares de los Datos/Información
            </h3>
            <p>
              Los titulares de los datos tienen derecho a autorizar el tratamiento y/o utilización de sus datos
              personales y a revocar dicha autorización en forma total o parcial y en cualquier oportunidad. Asimismo,
              tienen derecho a conocer que sus datos son tratados y que se encuentran incluidos en bases de datos,
              también a solicitar la corrección y/o actualización de los mismos si son inexactos o están incompletos, y
              si así correspondiere, a requerir la eliminación de los mismos. Asimismo, el titular de los datos tiene
              derecho a solicitar una explicación sobre la lógica aplicada cuando se tomen decisiones basadas únicamente
              en el tratamiento automatizado de datos que le produzcan efectos jurídicos perniciosos o lo afecten
              significativamente en forma negativa. Estos derechos podrán ser ejercidos en cualquier momento. Para
              proteger la privacidad, se solicitará a los titulares de los datos que presenten constancias de
              identificación adecuadas y su aprobación antes de procesar las solicitudes. Los datos son valiosos, por
              eso, es importante que el titular sea responsable en la carga de los mismos, en consecuencia, debe brindar
              datos ciertos y actualizados. Cualquier otra inquietud relacionada con el procesamiento y tratamiento de
              la información personal o por disconformidad con nuestro procesamiento de una solicitud o queja relativa a
              la protección de datos, LA AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control
              de la Ley N° 25.326, tiene la atribución de atender las denuncias y reclamos que interpongan quienes
              resulten afectados en sus derechos por incumplimiento de las normas vigentes en materia de protección de
              datos personales. Se deja constancia que la supresión de datos generará la baja de alguno o todos los
              servicios y productos que ofrece Tarjeta Pampeana S.A.
            </p>
          </section>
          <section id="entrega-acceso" className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Entrega/Acceso de Información Personal a Proveedores de Servicios
            </h3>
            <p>
              La información recolectada se comparte con las unidades de negocios de la entidad y los terceros con los
              que la entidad posea relaciones comerciales. Asimismo, con quienes proveen servicios de procesamiento de
              datos para la entidad, y con asesores, consultores y auditores que lo soliciten para el cumplimiento de
              requerimientos comerciales, legales, administrativos o judiciales.
            </p>
            <p>
              En los casos en que Tarjeta Pampeana S.A. entregue o comparta datos personales con terceros para las
              finalidades autorizadas por el titular o previstas en la ley; se asegurará de establecer condiciones que
              vinculen al proveedor a las políticas de privacidad, confidencialidad y seguridad de la información, de
              tal forma que la información personal de los titulares se encuentre protegida.
            </p>
          </section>
          <section id="proteccion-datos" className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Protección De Los Datos Personales</h3>
            <p>
              En Tarjeta Pampeana S.A. implementamos diferentes medidas de seguridad, tecnológicas y de procesos, para
              proteger los datos personales que gestionamos. Tienen por objeto proteger la confidencialidad, integridad
              y disponibilidad de los datos, de manera que solo sean accedidos o modificados por las personas
              autorizadas y se encuentren disponibles en tiempo y forma cuando sean requeridos.
            </p>
            <p>Estos son algunos de los controles implementados:</p>
            <ul>
              <li>
                {' '}
                Practicamos la privacidad y seguridad por diseño: consideramos los requisitos desde el primer momento en
                que se comienza un proyecto o mejora de procesos y/o sistemas.
              </li>
              <li>
                {' '}
                Evaluamos los riesgos de los cambios o innovaciones en el tratamiento de datos con el objeto de
                mitigarlos hasta niveles aceptables.
              </li>
              <li>
                {' '}
                Implementamos el criterio de “necesidad de saber” a la hora de asignar permisos de
                acceso/modificación/eliminación de datos: solo se otorgan permisos a quienes lo requieren para el
                cumplimiento de sus funciones.
              </li>
              <li> Realizamos concientización y capacitación interna en materia de protección de datos y privacidad</li>
              <li>
                {' '}
                Implementamos controles de acceso a los sistemas y los datos en los que estos se encuentren de acuerdo a
                su criticidad, incluyendo políticas de contraseñas, múltiples factores de autenticación, esquemas de
                autorización, entre otros.
              </li>
              <li>
                {' '}
                Ciframos los datos en reposo y en tránsito con el objeto de que no sean inteligibles por terceros no
                autorizados.
              </li>
            </ul>
          </section>
          <section id="vigencia" className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Vigencia de la Utilización/Tratamiento de los Datos
            </h3>
            <p>
              La información suministrada por los titulares de los datos permanecerá almacenada por el tiempo que
              determine el titular (o información histórica relacionada con transacciones, si corresponde) o la que sea
              indicada por ley para el cumplimiento de los fines para los cuales fue incorporada/autorizada.
            </p>
          </section>
          <section id="modificaciones" className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Modificación a la Política de Protección/Privacidad y Tratamiento de Datos Personales
            </h3>
            <p>
              Tarjeta Pampeana S.A. se reserva el derecho de modificar las normas de confidencialidad y protección de
              datos con el fin de adaptarlas a nuevos requerimientos de tipo legal, jurisprudencial, técnicos, mejores
              prácticas y estándares de la industria de tarje tas de crédito y medios de pago cuando sea necesario para
              prestar un mejor servicio, notificando a los titulares de dichas modificaciones y a partir de cuándo
              comienza entraran en vigencia.
            </p>
          </section>
          <section id="aceptacion" className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Aceptación de la Política de Protección/Privacidad y Tratamiento de Datos Personales
            </h3>
            <p>
              El titular de la información acepta el tratamiento de sus datos personales, conforme con los términos de
              esta política de protección/privacidad. En consecuencia, cuando ingresa, se registra y/o utiliza nuestro
              sitio web www.tarjetapampeana.com.ar y/o https://online.pampeana.com.ar/ y/o nuestra app móvil y/o se
              acerca a las oficinas de nuestra organización o por intermedio de nuestros representantes comerciales en
              forma personal o remota y/o a completa formularios de cualquier naturaleza de la entidad, cuando
              proporciona los datos a través de nuestros canales o puntos de atención y cuando compra, adquiere, se
              afilia o usa cualquiera de nuestros productos o servicios; acepta que está brindando información a Tarjeta
              Pampeana S.A., y autoriza a la entidad a utilizar dicha información.
            </p>
          </section>
          <section id="mecanismos" className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Mecanismos de Actualización</h3>
            <p>
              Se deberá asegurar a través de revisión y mantenimiento periódico, que esta política permanezca aplicable,
              cumplible y actualizable en función de los cambios de la organización, los riesgos y su contexto.
            </p>
            <p>
              En caso que se modifique la política aprobada y vigente en la entidad, deberá evaluarse si corresponde
              adecuar el/los procedimientos, normas y/o estándares asociados. Asimismo, en el caso en que se haya
              adaptado un procedimiento relacionado, no necesariamente se requerirá una modificación de esta política,
              pero se evaluará si se justifica una actualización especial al efecto de mantener la consistencia.
            </p>
            <p>
              Por último, la política de seguridad de datos se podrá actualizar en virtud de que las necesidades
              normativas, jurisprudenciales, comerciales y tecnológicas así lo requieran.
            </p>
          </section>
          <section id="datos" className="mb-8">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Datos Del Responsable De Tratamiento De Datos</h3>
            <p>
              Tarjeta Pampeana S.A., con domicilio en calle Avenida Rivadavia N° 602, de la ciudad de Macachín,
              Provincia de La Pampa, es responsable de las bases de datos que gestiona. Cualquier consulta o contacto
              relacionado con esta materia podrá efectuarse a dicho domicilio postal.
            </p>
          </section>
        </section>
      </div>
    </div>
  );
};

export default ProteccionDatos;
