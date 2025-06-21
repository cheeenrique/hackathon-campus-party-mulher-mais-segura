import React from 'react'
import { Header } from './Header'
import { SOSButton } from './SOSButton'

interface LayoutProps {
  children: React.ReactNode
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="fixed top-0 left-0 right-0 z-50">
        <Header />
      </div>
      <main className="w-full px-4 pt-24 pb-20">
        {children}
      </main>
      <SOSButton />
    </div>
  )
} 