'use client';
import { useEffect, useState } from 'react';
import { City } from '@/types/city';
import Header from '@/components/header';
import CityCard from '@/components/city-card';

export default function HomePage() {
  const [cities, setCities] = useState<City[]>([]);

  useEffect(() => {
    fetch('/api/cities')
      .then(res => res.json())
      .then(data => setCities(data));
  }, []);

  return (
  <div>
    <div>
      <Header />
    </div>
    <main className="p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {cities.map((city, idx) => (
      <CityCard key={idx} city={city} />
      ))}
    </main>
  </div>
  );
}