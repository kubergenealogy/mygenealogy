import React from 'react'
import { useNavigate } from 'react-router-dom'
import '../assets/css/member-card.scss'

const MemberCard = (props) => {
    const navigate = useNavigate();

    const clickHandler = () =>{
        navigate('/person-details', {state: props.details})
    }
    return (
        <div className="member-card"  onClick={clickHandler}>
            <div className="inner-container">
            <div className="img-container">
                <img src={require(`../assets/images/${props.details.url}`)} alt="" />
            </div>

            <div className="name">{props.details.name}</div>
            </div>
        </div>
    )
}

export default MemberCard
