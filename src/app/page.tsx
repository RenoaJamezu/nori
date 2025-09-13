import React from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/sections/Hero'

const HomePage = () => {
  return (
    <div className='relative w-full min-h-screen'>
      <Navbar />
      <Hero />
    </div>
  )
}

export default HomePage