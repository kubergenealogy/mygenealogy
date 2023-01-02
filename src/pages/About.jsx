import React, { useEffect } from 'react'
import Header from '../components/Header'

const About = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  },[])
  return (
    <div className="about">
      <Header />
      <div className="page-title">About <span></span></div>
    </div>
  )
}

export default About
