import React, { useState } from 'react'
import PageHeader from '../components/PageHeader'
import PreparationCard from '../components/dashboard/PreparationCard'
import CertificationCard from '../components/dashboard/CertificationCard'
import Topics from '../components/dashboard/Topics'
import PrepKitCard from '../components/dashboard/PrepKitCard'

export default function DashBoard() {

  const [progess, setprogess] = useState({
    cpp: 30,
    python: 60,
  })

  return (
    <>
     
      <div className='dashboard-container bg-background min-h-[100vh] w-full'>
        <PageHeader pageName="Prepare" heading="Learning programming skills" bookmarkedChanllenges={true} />
        <div className="dashboard-wrapper  xl:w-10/12 2xl:w-[70%] w-full  mx-auto  px-5  ">
          <div className="prepCards-container mt-8">
            <p className="font-medium text-textPrimary text-lg">Your Preparation</p>
            <div className="dashboarPrepCards flex justify-between flex-wrap space-y-6 md:space-y-0 mt-4  ">
              <PreparationCard prepName={'Python'} progess={progess.python} />
              <PreparationCard prepName={'C++'} progess={progess.cpp} />
            </div>
          </div>

          <div className="certification-cards-container mt-10">
            <p className="font-medium text-textPrimary text-lg">Certification</p>
            <div className="certification-cards flex items-center flex-wrap space-y-6 md:space-x-6 lg:space-x-7 xl:space-x-[34px]  md:space-y-0 mt-4  ">
              <CertificationCard topicName={'Problem Solving(Basic)'} />
              <CertificationCard topicName={'Python(Basic)'} />
              <CertificationCard />
            </div>
          </div>

          <div className="topics mt-10">
            <p className="font-medium text-textPrimary text-lg">Prepare by topics</p>
            <Topics />
          </div>

          <div className="prepartion-kits mt-10 pb-12">
            <p className="font-medium text-textPrimary text-lg">Preparation Kits</p>
            <div className="mt-4 flex justify-between flex-wrap md:space-y-0 space-y-6">
              <PrepKitCard title={'1 Week Preparation Kit '}  Preparation={{'challenges':21,'attempts':344950,'mock_test':6}}/>
              <PrepKitCard title={'1 Month Preparation Kit '}  Preparation={{'challenges':54,'attempts':103478,'mock_test':4}}/>
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}
