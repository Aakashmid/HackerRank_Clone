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

  const [activePreparation,setActivePreparation]=useState(null)
  
  const  handlePreparation=(preparationName)=>{
    setActivePreparation(preparationName)
  }

  return (
    <>
     
      <div className='dashboard-container bg-page_background min-h-[100vh] w-full'>
        <PageHeader pageName="Prepare" heading="Learn programming skills" bookmarkedChanllenges={true} />
        <div className="dashboard-wrapper  lg:w-[95%] xl:w-[1240px]    w-full  mx-auto  px-5  ">
          <div className="prepCards-container mt-10">
            <p className="font-medium text-white text-lg">Your Preparation</p>
            <div className="dashboarPrepCards grid  md:grid-cols-2 gap-9 py-4  ">
              <PreparationCard handlePreparation={handlePreparation} activePreparation={activePreparation} prepName={'Python'} progess={progess.python} />
              <PreparationCard handlePreparation={handlePreparation} activePreparation={activePreparation} prepName={'C++'} progess={progess.cpp} />
            </div>
          </div>

          <div className="certification-cards-container mt-8">
            <p className="font-medium text-white text-lg">Certification</p>
            <div className="certification-cards  py-4 grid md:grid-cols-3 gap-7   ">
              <CertificationCard topicName={'Problem Solving(Basic)'} />
              <CertificationCard topicName={'Python(Basic)'} />
              <CertificationCard />
            </div>
          </div>

          <div className="topics mt-8">
            <p className="font-medium text-white text-lg">Prepare by topics</p>
            <Topics />
          </div>

          <div className="prepartion-kits mt-8 pb-6">
            <p className="font-medium text-white text-lg">Preparation Kits</p>
            <div className="py-4 grid md:grid-cols-2 gap-7">
              <PrepKitCard title={'1 Week Preparation Kit '}  Preparation={{'challenges':21,'attempts':344950,'mock_test':6}}/>
              <PrepKitCard title={'1 Month Preparation Kit '}  Preparation={{'challenges':54,'attempts':103478,'mock_test':4}}/>
            </div>
          </div>
        </div>
      </div>
     
    </>
  )
}
