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

const iconOpen = new L.DivIcon({
  className: 'rounded-full shadow -translate-y-1 border border-white',
  html: '<div style="width:18px;height:18px;background:#60617E;border-radius:50%;box-shadow:0 1px 4px rgba(0,0,0,.25)"></div>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

const iconSoon = new L.DivIcon({
  className: 'rounded-full shadow -translate-y-1 border border-white',
  html: '<div style="width:18px;height:18px;background:#DBDE6F;border-radius:50%;box-shadow:0 1px 4px rgba(0,0,0,.25)"></div>',
  iconSize: [18, 18],
  iconAnchor: [9, 9],
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
