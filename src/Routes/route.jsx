import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { DetailPage, Favorite, GalleryPage, HomePage, Login } from '../Pages'


export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/home' element=<HomePage /> />
        <Route path='/gallery' element=<GalleryPage /> />
        <Route path='/detail/:id' element=<DetailPage /> />
        <Route path='/favorite' element=<Favorite /> />
        <Route path='/login' element=<Login /> />
        <Route path='*' element=<HomePage /> />
      </Routes>
    </BrowserRouter>
  )
}
