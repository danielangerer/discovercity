import { getCities } from '@/lib/getCities'
import { notFound } from 'next/navigation'
import Layout from '@/components/layout'

type Props = { params: { name: string } }

export default async function CityPage({ params }: Props) {
  const name = decodeURIComponent(params.name).toLowerCase()
  const cities = await getCities()
  const city = cities.find(c => c.name.toLowerCase() === name)

  if (!city) return notFound()

  return (
    <Layout>
      <div className="max-w-4xl mx-auto p-6">
        <h1 className="text-4xl font-bold">{city.name}</h1>
        <p><strong>Country:</strong> {city.country}</p>
        <p><strong>Population:</strong> {city.population.toLocaleString()}</p>
        <p><strong>Founded:</strong> {city.founded}</p>
        <h2 className="mt-6 text-2xl font-semibold">Landmarks</h2>
        <ul className="list-disc ml-6">
          {city.landmarks.map((lm, i) => <li key={i}>{lm}</li>)}
        </ul>
      </div>
    </Layout>
  )
}