import bcra from '../assets/logos/bcra.png';
import datafiscal from '../assets/logos/data-fiscal.png';
import certacyc from '../assets/logos/CERTACYC-img.png';
const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo y redes sociales */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h2 className="text-purple-600 text-xl font-bold">Pampeana</h2>
            <p className="text-sm">Copyright Tarjeta Pampeana S.A.© Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-4">
              {/* Icons (puedes usar librerías como react-icons para estos) */}
              <a href="#" className="text-blue-500">
                <i className="fab fa-facebook text-2xl"></i>
              </a>
              <a href="#" className="text-red-500">
                <i className="fab fa-youtube text-2xl"></i>
              </a>
              <a href="#" className="text-pink-500">
                <i className="fab fa-instagram text-2xl"></i>
              </a>
            </div>
          </div>

          {/* Información */}
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-12">
            {/* Sobre tu tarjeta */}
            <div>
              <div className="flex flex-row items-center flex-nowrap">
                <img src={bcra} alt="bcra" height={120} width={120} />
                <img src={datafiscal} alt="bcra" height={60} width={60} />
                <img src={certacyc} alt="certac" height={160} width={160} />
              </div>
              <h3 className="text-lg font-bold">Sobre tu tarjeta</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-sm hover:text-purple-600">
                    Contrato adhesión tarjeta
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-purple-600">
                    Anexo a débito Automático
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-purple-600">
                    RESUMEN DEL CONTRATO PARA INFORMAR AL CLIENTE.
                  </a>
                </li>
              </ul>
            </div>

            {/* Nosotros */}
            <div>
              <h3 className="text-lg font-bold md:my-12 pt-8">Nosotros</h3>
              <ul className="mt-2 space-y-2">
                <li>
                  <a href="#" className="text-sm hover:text-purple-600">
                    Trabaja con nosotros
                  </a>
                </li>
                <li>
                  <a href="#" className="text-sm hover:text-purple-600">
                    Sobre nosotros
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Links adicionales */}
        <div className="mt-8 border-t pt-4 text-center">
          <ul className="flex flex-wrap justify-center space-x-4 text-sm">
            <li>
              <a href="#" className="hover:text-purple-600">
                Baja Tarjeta
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600">
                Consultas y reclamos
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600">
                Defensa al Consumidor
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600">
                Información al usuario financiero
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600">
                Protección de datos personales
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-purple-600">
                Botón de arrepentimiento
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
