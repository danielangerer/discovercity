"use client"

import dynamic from "next/dynamic"
import { LatLngExpression } from "leaflet"
import "leaflet/dist/leaflet.css"
import "leaflet-defaulticon-compatibility"
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css"

const MapContainer = dynamic(
  () => import("react-leaflet").then(mod => mod.MapContainer),
  { ssr: false }
)
const TileLayer = dynamic(
  () => import("react-leaflet").then(mod => mod.TileLayer),
  { ssr: false }
)
const Marker = dynamic(
  () => import("react-leaflet").then(mod => mod.Marker),
  { ssr: false }
)

interface CityMapProps {
  lat: number
  lng: number
  name: string
}

export default function CityMap({ lat, lng }: CityMapProps) {
  const pos: LatLngExpression = [lat, lng]

  return (
    <div className="h-64 w-full rounded-lg overflow-hidden shadow-md">
      <MapContainer center={pos} zoom={10} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={pos}>
          {/* optional Popup */}
        </Marker>
      </MapContainer>
    </div>
  )
}