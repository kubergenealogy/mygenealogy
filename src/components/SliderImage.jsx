import React, { useState } from "react";
import "../assets/css/slider-image.scss";
import { deathData } from "../assets/data/deathData";
import frame from '../assets/images/frame.png'

const SliderImage = ({ persons }) => {
  const [current, setcurrent] = useState(0);
  const len = persons.length;

  const randomPerson =()=>{
    setcurrent(Math.floor(Math.random() * len));
    clearInterval(timerInterval)
  }
  
  const nextPerson = () => {
    clearInterval(timerInterval)
    setcurrent(current === len - 1 ? 0 : current + 1);
  };
  const timerInterval = setInterval(randomPerson,5000);
  const prevPerson = () => {
    clearInterval(timerInterval)
    setcurrent(current === 0 ? len - 1 : current - 1);
  };

  return (
    <div>
      {deathData.map((person, index) => {
        return (
          <div
            className={
              index === current ? "slider-container active" : "slider-container"
            }
            key={index}
          >
            {index === current && (
              <>
                <div className="person-img">
                  <img src={require(`../assets/images/${person.url}`)} alt="" />
                </div>
                <div className="frame">
                <img src={frame} alt="frame" />
                </div>
                <div className="detail">
                  <div className="name">
                    {person.name}
                  </div>
                  <div className="date">
                    {person.birth} - {person.death}
                  </div>
                </div>
              </>
            )}
          </div>
        );
      })}
      <div className="arrows">
        <div className="arrow" onClick={prevPerson}>
          <i className="fa-solid fa-arrow-left"></i>
        </div>
        <div className="arrow" onClick={nextPerson}>
          <i className="fa-solid fa-arrow-right"></i>
        </div>
      </div>
    </div>
  );
};

export default SliderImage;
