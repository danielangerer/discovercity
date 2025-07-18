import Layout from "@/components/layout"
import Image from "next/image"

export default function CitiesPage() {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center h-[60vh] space-y-6">
        <Image
          src="/discovercity_logo.png"
          alt="City Explorer Logo"
          width={160}
          height={160}
          className="h-40 w-auto animate-logo-pulse"
        />
        <h1 className="text-3xl font-bold text-[#206176]">Contact</h1>
        <p className="text-gray-600">
          This page is not finished yet. Sorry 😢
        </p>
      </div>
    </Layout>
  )
}