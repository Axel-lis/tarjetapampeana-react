import { MapContainer, TileLayer, Popup, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { centrosDeAtencion } from '../constants/map.js';
// Configurar íconos de Leaflet
L.Icon.Default.mergeOptions({
  iconUrl: markerIcon,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const Mapa = () => {
  return (
    <div className="bg-gray-50 flex justify-center items-center w-full h-screen">
      <div className="w-full sm:w-3/4 h-[70vh]">
        <h3 className="font-bold text-2xl text-gray-500 mb-4">
          📍Usá el Mapa Para buscar tus Centros de Atención más cercanos
        </h3>
        <MapContainer
          center={[-37.375265177510805, -63.77341369814443]} // Coordenadas iniciales
          zoom={7}
          scrollWheelZoom={true}
          style={{ height: '100%', width: '100%', zIndex: 0 }}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {centrosDeAtencion.map((centro, index) => {
            // Verificar que la ubicacion existe y tiene lat y lng
            const { lat, lng } = centro.ubicacion || {};
            if (!lat || !lng) return null; // Si no hay latitud o longitud, no mostrar marcador

            return (
              <Marker key={index} position={[lat, lng]}>
                <Popup>
                  <div>
                    <h4 className="font-bold text-lg">{centro.nombre}</h4>
                    <p>
                      <strong>Dirección:</strong> {centro.direccion}
                    </p>
                    <p>
                      <strong>Teléfono:</strong> {centro.telefono}
                    </p>
                    <p>
                      <strong>Provincia:</strong> {centro.provincia}
                    </p>
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
};

export default Mapa;
