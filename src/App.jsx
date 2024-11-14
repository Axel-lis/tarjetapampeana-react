import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PaginaPrincipal from './components/PaginaPrincipal';
import ParaVos from './components/ParaVos';
import ParaTuComercio from './components/ParaTuComercio';
import CentrosAtencion from './components/CentrosAtencion';
import Promociones from './components/Promociones';

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
