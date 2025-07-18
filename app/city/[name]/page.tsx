// app/city/[name]/page.tsx
import { getCities } from '@/lib/getCities'
import { notFound } from 'next/navigation'
import Layout from '@/components/layout'
import CityMap from '@/components/city-map'

type Props = { params: { name: string } }

export default async function CityPage({ params }: Props) {
  const nameDecoded = decodeURIComponent(params.name).toLowerCase()
  const cities = getCities()
  const city = cities.find(c => c.name.toLowerCase() === nameDecoded)

  if (!city) return notFound()

  const lat = typeof city.latitude === 'string' ? parseFloat(city.latitude) : city.latitude
  const lng = typeof city.longitude === 'string' ? parseFloat(city.longitude) : city.longitude

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6 space-y-6">
        <h1 className="text-4xl font-bold text-[#206176]">{city.name}</h1>
        {/* Metadaten */}
        <div className="grid grid-cols-2 gap-4">
          <p><strong>Country:</strong> {city.country}</p>
          <p><strong>Founded:</strong> {city.founded}</p>
          <p><strong>Population:</strong> {Number(city.population).toLocaleString()}</p>
          <p><strong>Coordinates:</strong> {lat}, {lng}</p>
        </div>
        {/* Show Map */}
        <CityMap lat={lat} lng={lng} name={city.name} />
        {/* Landmarks */}
        <div>
          <h2 className="text-2xl font-semibold">Landmarks</h2>
          <ul className="list-disc ml-6 space-y-1">
            {city.landmarks.map((lm, i) => <li key={i}>{lm}</li>)}
          </ul>
        </div>
      </div>
    </Layout>
  )
}