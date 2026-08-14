import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/Home'
import Product from './pages/Product'
import Reserve from './pages/Reserve'

export default function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />

        <Route path="/reserve" element={<Reserve />} />
      </Routes>
    </>
  )
}
