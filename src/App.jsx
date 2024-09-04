import React from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import CustomRoutes from './routes'

function App() {
  return (
    <div>
      <Navbar/>
      <CustomRoutes/>
    </div>
  )
}

export default App