import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Product from './pages/Product'
import SmartAir from './pages/SmartAir'
import About from './pages/About'
import Reserve from './pages/Reserve'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/smart-air" element={<SmartAir />} />
        <Route path="/about" element={<About />} />
        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </>
  )
}
