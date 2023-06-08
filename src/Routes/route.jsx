import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../Pages/Home/Index'
import Gallery from '../Pages/Gallery/Index'

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element=<Home /> />
        <Route path='/gallery' element=<Gallery /> />
      </Routes>
    </BrowserRouter>
  )
}
