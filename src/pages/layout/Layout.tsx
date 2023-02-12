import React from 'react'
import NavBar from './NavBar'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className='min-h-100vh relative'>{children}</div>
  )
}
