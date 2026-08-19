import React from 'react'
import Navbar from './components/navbar/Navbar'
import Banner from './components/banner/Banner'
import Aside from './components/aside/Aside'
import Cards from './components/cards/Cards'
import Cardsfooter from './components/cardsfooter/Cardsfooter'

export default function App() {
  return (
    <div>
      <Navbar  />
      <Banner /> 
      <Aside />
      <Cards />
      <Cardsfooter />
    </div>
  )
}
