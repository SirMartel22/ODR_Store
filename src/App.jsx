import React from 'react'
import Navbar from './Components/Layout/Navbar/Navbar'
import { Analytics } from '@vercel/analytics/react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {

  return (
    <>
      <Navbar />
      <Analytics />
    </>
  )
}

export default App
