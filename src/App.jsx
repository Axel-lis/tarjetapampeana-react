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
import WhatsAppWidget from './components/Common/WhatsAppWidget';
import Footer from './components/Common/Footer';
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/para-vos" element={<ParaVos />} />
          <Route path="/para-tu-comercio" element={<ParaTuComercio />} />
          <Route path="/centros-atencion" element={<CentrosAtencion />} />
          <Route path="/promociones" element={<Promociones />} />
          <Route path="/form-adherir-comercio" element={<AdherirComercio />} />
          <Route path="/form-solicitud-credito" element={<SolicitarPrestamo />} />
        </Routes>
        <WhatsAppWidget />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
