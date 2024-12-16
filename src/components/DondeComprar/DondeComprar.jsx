import { bannerDC } from '../constants/index.js';
import DynamicTable from './DynamicTable';
const DondeComprar = () => {
  return (
    <div className="py-20">
      <div className="banner">
        <img src={bannerDC} alt="banner" />
      </div>
      <DynamicTable />
    </div>
  );
};

export default DondeComprar;
