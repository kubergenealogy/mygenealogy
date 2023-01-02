import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Header from '../components/Header'
import '../assets/css/person-details.scss'

const PersonDetail = () => {
  const { state } = useLocation();
  const helpingVerb = state.alive === 'no'?'was':'is';
  const helpingVerb2 = state.alive === 'no'?'had':'have';
  const proNoun = state.gender === 'male'?'He': state.gender===undefined? state.name:'She';
  const personNoun = state.gender === 'male'?'His': state.gender===undefined? state.name:'Her';
  const daughters = state.children.daughter.length;
  const sons = state.children.son.length;
  
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <div className="person-details">
      <Header />
      <div className="details">
        <div className="title">{state.name}</div>
        <div className="detail">
          <div className="image-container">
            <img src={require(`../assets/images/${state.url}`)} alt="" />
            <div className="name">{state.name}</div>
          </div>
          <div className="story">
            {state.birth !== 'unknown'||state.birthPlace !=="unknown"?`${state.name} was born `:''}
            {state.birth !== 'unknown'?`in ${state.birth}`:''}
            {state.birthPlace !== 'unknown'?` in ${state.birthPlace}.`:''}
            {state.fatherName !=='unknown'? ` ${personNoun} father name is Mr. ${state.fatherName}.`:''}
            {state.motherName!=='unknown'? ` ${personNoun} mother name is Mrs. ${state.motherName}.`:''}
            {state.profession !=='unknown' && state.gender!==undefined? ` ${proNoun} ${helpingVerb} a ${state.profession}.`:''}
            {state.alive==="no" && state.death!=='unknown'?` ${proNoun} died in ${state.death}.`:''}
            {sons||daughters? sons?daughters?` ${proNoun} ${helpingVerb2} ${sons} son and ${daughters} daughter.`:`${proNoun} have ${sons} son.` :`${proNoun} have ${daughters} daughter.` :''}
          </div>
        </div>
      </div>
    </div>
  )
}

export default PersonDetail
