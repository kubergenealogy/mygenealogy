import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/css/home-page.scss'
import IntroPng from '../assets/images/krishna.jpg'
import { ImageData } from '../assets/data/IntroImages'
import Navigation from '../components/Navigation'

const HomePage = () => {

    const items = []
    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * ImageData.length);
        items.push(ImageData[randomNumber].url);
    }
    console.log(items);

    return (
        <div className="home">
            <Navigation />
            <div className="main">
                <div className="intro">
                    <div className="Welcome-card">
                        <div className="title">Welcome to Our Site</div>
                        <div className="subtitle">We hope you find everything you are looking for and many things you haven't thought of yet!</div>
                        <div className="image">
                            <img src={IntroPng} alt="" />
                        </div>
                        <div className="title">Thanks for visiting!</div>
                    </div>
                    <hr />
                    <div className="subtitle2">
                        <strong>Y</strong>ou could find an infamous relative. Or perhaps a photo of your great-grandma as a little girl. But whatever you find, it’s sure to change the whole way you look at your family history, and yourself... <br />
                        After all, the story of your family is the story of you.
                        <div className="quote">
                            “How many stories are there that have been lived, but will never be told? Far too many for me to squander the one that I’m living.”
                        </div>
                    </div>
                </div>
                <div className="gallery">
                    <div className="title">Gallery <Link to='/gallery'><span>See more</span></Link> </div>
                    <div className="images">
                        {
                            items.map((item) => {
                                return (
                                    <div className="image">
                                        <img src={require(`../assets/images/${item}`)} alt="" />
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePage