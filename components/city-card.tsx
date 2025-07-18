'use client';
import { City } from '@/types/city';
import Link from 'next/link';
import Image from 'next/image';

export default function CityCard({ city }: { city: City }) {
  const citySlug = encodeURIComponent(city.name.toLowerCase());

  //Placeholder picture
  const imageUrl = `https://picsum.photos/seed/${citySlug}/400/300`;

  return (
    <Link href={`/city/${citySlug}`} className="group">
      <div className="rounded-2xl overflow-hidden shadow-lg border border-amber-200 bg-white transition transform duration-300 hover:-translate-y-1 hover:shadow-xl">
        <div className="h-38 w-full overflow-hidden">
          <Image
            src={imageUrl}
            alt={city.name}
            width={400}
            height={300}
            className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors duration-200">
            {city.name}
          </h2>
          <p className="text-sm text-gray-500 mb-2">
            {city.country} • {city.continent}
          </p>
          <div className="text-sm text-gray-700 space-y-1">
            <p><strong>Population:</strong> {Number(city.population).toLocaleString()}</p>
            <p><strong>Founded:</strong> {city.founded}</p>
          </div>
        </div>
      </div>
    </Link>
  );
}