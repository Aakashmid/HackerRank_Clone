import React from 'react'
import Topbar from '../components/Topbar'
import PageHeader from '../components/PageHeader'
import PreparationCard from '../components/dashboard/PreparationCard'

export default function DashBoard() {
  return (
    <>
      <Topbar />
      <div className='dashboard-container'>
        <PageHeader pageName="Prepare" heading="Learning programming skills" bookmarkedChanllenges={true} />
        <div className="dashboard-wrapper  bg-background h-[100vh] w-full px-4 py-10 ">
          <div className=" lg:w-10/12 xl:w-[70%] w-full  mx-auto  ">
            <p className="font-medium text-textPrimary text-lg">Your Preparation</p>
            <PreparationCard prepName={'Python'}/>
          </div>
        </div>
      </div>
    </>
  )
}
