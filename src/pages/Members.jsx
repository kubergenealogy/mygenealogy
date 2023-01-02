import React, { useEffect } from 'react'
import Header from '../components/Header'
import '../assets/css/members-page.scss'
import MemberCard from '../components/MemberCard'
import { AllMembers } from '../assets/data/AllMembersDetails'

const Contact = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' })
  }, [])
  return (
    <div className="members-page">
      <Header />
      <div className="page-title">Members <span></span></div>
      <div className="card-container">
        {
          AllMembers.map(item => {
            return <MemberCard details={item} />
          })
        }
      </div>
    </div>
  )
}

export default Contact