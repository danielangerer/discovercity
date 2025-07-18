import Header from './header'
import { ReactNode } from 'react'

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#FDEECE]">
        {children}
      </main>
    </>
  )
}