import { City } from '@/types/city';

export default function CityCard({ city }: { city: City }) {
  return (
    <div className="rounded-xl shadow p-4 border bg-white">
      <h2 className="text-xl font-semibold">{city.name}</h2>
      <p>{city.country}</p>
      <p>Population: {city.population.toLocaleString()}</p>
      <p>Founded: {city.founded.toLocaleString()}</p>
      <p>Latitude: {city.latitude.toLocaleString()}</p>
      <p>Longitude: {city.longitude.toLocaleString()}</p>
    </div>
  );
}