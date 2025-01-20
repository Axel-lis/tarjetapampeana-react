import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@justinribeiro/lite-youtube';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import ScrollToTop from './components/Common/ScrollToTop';
import PaginaPrincipal from './components/PaginaPrincipal/PaginaPrincipal';
import ParaVos from './components/ParaVos/ParaVos';
import ParaTuComercio from './components/ParaTuComercio/ParaTuComercio';
import CentrosAtencion from './components/CentrosAtencion/CentrosAtencion';
import Promociones from './components/Promociones/Promociones';
import AdherirComercio from './components/Forms/AdherirComercio';
import SolicitarPrestamo from './components/Forms/SolicitarPrestamo';
import SolicitarBaja from './components/Forms/SolicitarBaja';
import ConsultasYReclamos from './components/Forms/ConsultasYReclamos';
import WhatsAppWidget from './components/Common/WhatsAppWidget';
import Nosotros from './components/Nosotros/Nosotros';
import DondeComprar from './components/DondeComprar/DondeComprar';
import AhorraMas from './components/AhorraMas/AhorraMas';
import DefensaConsumidor from './components/DefensaConsumidor/DefensaConsumidor';
import InformacionUsuarioFinanciero from './components/Informacion/InformacionUsuarioFinanciero';
import ProteccionDatos from './components/Informacion/ProteccionDatos';
import Footer from './components/Common/Footer';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/para-tu-comercio" element={<ParaTuComercio />} />
          <Route path="/para-vos" element={<ParaVos />} />
          <Route path="/donde-comprar" element={<DondeComprar />} />
          <Route path="/centros-atencion" element={<CentrosAtencion />} />
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/ahorra-mas" element={<AhorraMas />} />
          <Route path="/form-adherir-comercio" element={<AdherirComercio />} />
          <Route path="/form-solicitud-credito" element={<SolicitarPrestamo />} />
          <Route path="/solicitar-baja" element={<SolicitarBaja />} />
          <Route path="/defensa-consumidor" element={<DefensaConsumidor />} />
          <Route path="/consultas-y-reclamos" element={<ConsultasYReclamos />} />
          <Route path="/informacion-usuario-financiero" element={<InformacionUsuarioFinanciero />} />
          <Route path="/proteccion-datos" element={<ProteccionDatos />} />
        </Routes>
        <WhatsAppWidget />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
