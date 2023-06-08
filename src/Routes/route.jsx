import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DetailPage, GalleryPage, HomePage } from '../Pages'


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element=<HomePage /> />
        <Route path='/gallery' element=<GalleryPage /> />
        <Route path='/detail/:id' element=<DetailPage /> />
      </Routes>
    </BrowserRouter>
  )
}
