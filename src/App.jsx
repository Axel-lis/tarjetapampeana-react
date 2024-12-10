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
import WhatsAppWidget from './components/Common/WhatsAppWidget';
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
        </Routes>
        <WhatsAppWidget />
      </div>
    </Router>
  );
}

export default App;
