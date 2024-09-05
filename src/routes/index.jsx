import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { NowPlaying, Popular, SingleMovie, TopRated, UpComing } from '../pages'

function CustomRoutes() {
  return (
    <Routes>
        <Route path='/' element={<NowPlaying/>}/>
        <Route path='/popular' element={<Popular/>}/>
        <Route path='/top-rated' element={<TopRated/>}/>
        <Route path='/up-coming' element={<UpComing/>}/>
        <Route path='/:id' element={<SingleMovie/>}/>
    </Routes>
  )
}

export default CustomRoutes