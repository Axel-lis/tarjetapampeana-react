import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@justinribeiro/lite-youtube';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Common/Navbar';
import PaginaPrincipal from './components/PaginaPrincipal/PaginaPrincipal';
import ParaVos from './components/ParaVos/ParaVos';
import ParaTuComercio from './components/ParaTuComercio/ParaTuComercio';
import CentrosAtencion from './components/CentroAtencion/CentrosAtencion';
import Promociones from './components/Promociones/Promociones';

function App() {
  return (
    <Router>
      <div className="App">
        {/*El componente Navbar se muestra en todas las rutas, y el contenido cambia según la ruta.*/}
        <Navbar />
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/para-vos" element={<ParaVos />} />
          <Route path="/para-tu-comercio" element={<ParaTuComercio />} />
          <Route path="/centros-atencion" element={<CentrosAtencion />} />
          <Route path="/promociones" element={<Promociones />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
