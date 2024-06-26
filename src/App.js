import React from 'react'
import Main from './components/Main'
import "./assets/scss/style.scss"

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import PortPickstom from './pages/PortPickstom'
import Landing from './pages/Landing'

const App = () => {
  return (
    <BrowserRouter>
      <Main>
        <Routes>
          <Route path='/' element={<Landing/>}/>
          <Route path='/main' element={<Home/>}/>
          <Route path='/port1' element={<PortPickstom/>}/>
        </Routes>
      </Main>
    </BrowserRouter>
  )
}

export default App