import React, { Suspense } from 'react';
import { bannerDC } from '../constants/index.js';

const DynamicTable = React.lazy(() => import('./DynamicTable'));

const DondeComprar = () => {
  return (
    <div className="py-20">
      <div className="banner">
        <img src={bannerDC} alt="banner" loading="lazy" />
      </div>
      <Suspense fallback={<div>Cargando Comercios...⌛</div>}>
        <DynamicTable />
      </Suspense>
    </div>
  );
};

export default DondeComprar;
