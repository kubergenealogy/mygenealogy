import React, { useEffect, useState } from 'react'
import '../assets/css/gallery.scss'
import { ImageData } from '../assets/data/IntroImages'
import { LandScapeImages } from '../assets/data/LandScapeImages'
import Header from '../components/Header';


const Gallery = () => {
    const [current, setcurrent] = useState(0);
    const len = LandScapeImages.length

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
      },[])

    const randomImg =()=>{

        setcurrent(Math.floor(Math.random() * len));
        clearInterval(timerInterval)
      }
      
      const nextImg = () => {
        clearInterval(timerInterval)
        setcurrent(current === len - 1 ? 0 : current + 1);
      };
      
      const timerInterval = setInterval(randomImg,5000);
    
      const prevImg = () => {
        clearInterval(timerInterval)
        setcurrent(current === 0 ? len - 1 : current - 1);
      };

    return (
        <div className="gallery-page page">
            <Header />
            <div className="gallery">
                <div className="slider">
                    <div className="btn pre-btn"  onClick={prevImg}><i class="fa-solid fa-angle-left"></i></div>
                    <div className="img-container">
                        {
                            LandScapeImages.map((item,index)=>{
                                return (
                                    <div className={index === current ? "img active":"img"} >
                                        <img src={require(`../assets/images/${item.url}`)} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="btn next-btn" onClick={nextImg}><i class="fa-solid fa-angle-right"></i></div>
                </div>
                <div className="page-title">Memories<span></span></div>
                <div className="images">
                    {
                        ImageData.map((item) => {
                            return (
                                <div className="image">
                                    <img src={require(`../assets/images/${item.url}`)} alt="" />
                                </div>
                            );
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Gallery