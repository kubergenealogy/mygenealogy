import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
import About from './pages/About'
import Members from './pages/Members'
import Gallery from './pages/Gallery'
import GenealogyTree from './pages/GenealogyTree'
import HomePage from './pages/HomePage'
import Tribute from './pages/Tribute'

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/tribute' element={<Tribute />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/familytree' element={<GenealogyTree/>}/>
        <Route path='/members' element={<Members/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App