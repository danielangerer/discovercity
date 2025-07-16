import raw from '@/data/cities.json';
import { City } from '@/types/city';

export function getCities(): City[] {
  return (raw.cities as Array<Omit<City, 'latitude' | 'longitude' | 'population' | 'founded'> & {
    latitude: string;
    longitude: string;
    population: string;
    founded: string;
  }>).map(city => ({
    ...city,
    latitude: parseFloat(city.latitude),
    longitude: parseFloat(city.longitude),
    population: parseInt(city.population, 10),
    founded: parseInt(city.founded, 10),
  }));
}