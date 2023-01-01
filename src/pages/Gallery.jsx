import React from 'react'
import '../assets/css/gallery.scss'
import { ImageData } from '../assets/data/IntroImages'
import Header from '../components/Header';


const Gallery = () => {
    return (
        <div className="gallery-page page">
            <Header />
            <div className="gallery">
                <div className="page-title">Memories <span></span></div>
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