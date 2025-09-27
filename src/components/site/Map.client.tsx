'use client';
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';

type Place = {
  name: string;
  lat: number;
  lng: number;
  status: 'open' | 'soon';
};

const iconOpen = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

const iconSoon = new L.DivIcon({
  className:
    'bg-amber-500/90 rounded-full text-white text-[10px] leading-[20px] text-center w-5 h-5 border border-white shadow',
  html: '⚑',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

export function InteractiveMap({ places }: { places: Place[] }) {
  const center: [number, number] = [48.855, 2.35];
  return (
    <MapContainer
      center={center}
      zoom={10}
      className="h-[360px] w-full rounded-xl overflow-hidden border border-neutral-200"
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {places.map((p) => (
        <Marker
          key={p.name}
          position={[p.lat, p.lng]}
          icon={p.status === 'open' ? iconOpen : iconSoon}
        >
          <Popup>
            <strong>{p.name}</strong>
            <div className="text-xs mt-1">{p.status === 'open' ? 'Ouvert' : 'À venir'}</div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
}
