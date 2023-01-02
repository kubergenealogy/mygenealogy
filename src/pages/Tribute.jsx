import React, { useEffect } from 'react'
import '../assets/css/tribute.scss'
import SliderImage from '../components/SliderImage'
import candle from '../assets/images/candle.png'
import { deathData } from "../assets/data/deathData";
import Header from '../components/Header';

const Tribute = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  },[])
  return (
    <div className="tribute">
      <Header/>
      <div className="tribute-container">
        <div className="title">Heartfelt tributes to those we have lost so far.</div>
        <SliderImage persons={deathData} />
        <div className="candles">
          <img src={candle} alt="" />
          <img src={candle} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Tribute