import React from 'react'
import '../assets/css/gallery.scss'
import { ImageData } from '../assets/data/IntroImages'
import Navigation from '../components/Navigation';

const Gallery = () => {
    return (
        <div className="gallery-page page">
            <Navigation />
            <div className="gallery">
                <div className="title">Memories</div>
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