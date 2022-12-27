import React from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.scss'
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
      </Routes>
    </div>
  )
}

export default App