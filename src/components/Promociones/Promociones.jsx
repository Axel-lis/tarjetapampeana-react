import Carousel from './Carousel';
import Footer from '../Common/Footer';
import DataTable from './DataTable';
const Promociones = () => {
  return (
    <div>
      <Carousel tiempoCarga={500} />
      <DataTable />
      <Footer />
    </div>
  );
};

export default Promociones;
