
import bcra from '../../assets/logos/bcra.png';
import datafiscal from '../../assets/logos/data-fiscal.png';
import certacyc from '../../assets/logos/CERTACYC-img.png';
import { FaFacebook, FaYoutube, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className="bg-white-50  text-gray-700 py-8 border-t">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          {/* Logo y redes sociales */}
          <div className="flex flex-col items-center md:items-start mb-8 md:mb-0">
            <h2 className="text-purple-700 text-xl font-bold">Pampeana</h2>
            <p className="text-sm">Copyright Tarjeta Pampeana S.A.© Todos los derechos reservados.</p>
            <div className="flex space-x-4 mt-4">
              {/* Icons (puedes usar librerías como react-icons para estos) */}
              <a
                href="https://www.facebook.com/PampeanaOficial"
                target="_blank"
                className="text-blue-500 hover:text-blue-600"
              >
                <FaFacebook />
              </a>
              <a
                href="https://www.youtube.com/@TarjetaPampeana"
                target="_blank"
                className="text-red-500 hover:text-red-600"
              >
                <FaYoutube />
              </a>
              <a
                href="https://www.instagram.com/tarjetapampeana/"
                target="_blank"
                className="text-pink-500 hover:text-pink-600"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Información */}
          <div className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-1">
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
                  <a href="/contrato/Contrato Web 2025.pdf" className="text-sm hover:text-purple-600">
                    Contrato adhesión tarjeta
                  </a>
                </li>
                <li>
                  <a href="/contrato/Terminos-y-Condiciones-Débito 2024.pdf" className="text-sm hover:text-purple-600">
                    Anexo a débito Automático
                  </a>
                </li>
                <li>
                  <a href="/contrato/Anexo Pampeana Gold.pdf" className="text-sm hover:text-purple-600">Anexo Pampeana Gold</a>
                </li>
                <li>
                  <a href="/contrato/Anexo Pampeana Premium.pdf"> Anexo Pampeana Premium</a>
                </li>
                <li>
                  <a href="/contrato/RESUMEN DEL CONTRATO PARA INFORMAR AL CLIENTE.pdf" className="text-sm hover:text-purple-600">
                    RESUMEN DEL CONTRATO
                  </a>
                </li>
              </ul>
            </div>

            {/* Nosotros */}
            <div>
              <h3 className="text-lg font-bold md:mt-20">Nosotros</h3>
              <ul className="md:mr-5">
                <li>
                  <Link to="/nosotros" aria-label="Trabaja con nosotros">
                    Trabaja con nosotros
                  </Link>
                </li>
                <li>
                  <Link to="/nosotros" aria-label="Sobre nosotros">
                    Sobre nosotros
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Links adicionales */}
        <div className="mt-8 border-t pt-4 text-center">
          <ul className="flex flex-wrap justify-center space-x-4 text-sm">
            <li>
              <Link to="/solicitar-baja" className="hover:text-purple-600">
                Baja Tarjeta
              </Link>
            </li>
            <li>
              <Link to="/consultas-y-reclamos" className="hover:text-purple-600">
                Consultas y reclamos
              </Link>
            </li>
            <li>
              <Link to="/defensa-consumidor" className="hover:text-purple-600">
                Defensa al Consumidor
              </Link>
            </li>
            <li>
              <Link to="/informacion-usuario-financiero" className="hover:text-purple-600">
                Información al usuario financiero
              </Link>
            </li>
            <li>
              <Link to="/proteccion-datos" className="hover:text-purple-600">
                Protección de datos personales
              </Link>
            </li>
            <li>
              <Link to="/boton-arrepentimiento" className="hover:text-purple-600">
                Botón de arrepentimiento
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
