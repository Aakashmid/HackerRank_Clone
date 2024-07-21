import React from 'react'
import Topbar from '../components/Topbar'
import PageHeader from '../components/PageHeader'
import PreparationCard from '../components/dashboard/PreparationCard'
import CertificationCard from '../components/dashboard/CertificationCard'

export default function DashBoard() {
  return (
    <>
      <Topbar />
      <div className='dashboard-container bg-background min-h-[100vh] w-full'>
        <PageHeader pageName="Prepare" heading="Learning programming skills" bookmarkedChanllenges={true} />
        <div className="dashboard-wrapper  xl:w-10/12 2xl:w-[70%] w-full  mx-auto  px-4 lg:px-5  ">
          <div className="prepCards-container mt-8">
            <p className="font-medium text-textPrimary text-lg">Your Preparation</p>
            <div className="dashboarPrepCards flex justify-between flex-wrap space-y-6 md:space-y-0 mt-4  ">
              <PreparationCard prepName={'Python'} />
              <PreparationCard prepName={'C++'} />
            </div>
          </div>

          <div className="certification-cards-container mt-10">
            <p className="font-medium text-textPrimary text-lg">Certification</p>
            <div className="certification-cards flex items-center flex-wrap space-y-6 md:space-x-6 md:space-y-0 mt-4  ">
              <CertificationCard topicName={'Problem Solving(Basic)'} />
              <CertificationCard topicName={'Python(Basic)'} />
              <CertificationCard  />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
