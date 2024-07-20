import React from 'react'
import Topbar from '../components/Topbar'
import PageHeader from '../components/PageHeader'

export default function DashBoard() {
  return (
    <div className='dashboard-container'>
      <Topbar />
      <div className="dashBoardWrapper">
      
        <PageHeader pageName="Prepare" heading="Learning programming skills" bookmarkedChanllenges={true}/>
        <div className="main-body bg-background h-full  w-full">

        </div>
      </div>
    </div>
  )
}
