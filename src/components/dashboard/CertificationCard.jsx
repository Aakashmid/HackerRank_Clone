
export default function CertificationCard({ topicName }) {
  return (
    <>
      {topicName ? (
        <div className=" bg-bg3 p-7 md:p-6  hover:bg-card_hover_bg rounded-2xl h-40 flex flex-col justify-between ">
          <h2 className="text-textPrimary font-medium  text-xl ">{topicName}</h2>
          <div className="">
            <button className="button bg-transparent text-textPrimary font-medium text-sm px-3  w-fit py-[6px]   custom-shadow-white  hover:border-none hover:bg-gray-500 rounded-md">
              Get Certified
            </button>
          </div>
        </div>
      ) :

        (<div className="bg-[#0e141e] p-7 md:p-6  w-full  rounded-2xl custom-shadow-darkb h-40 flex flex-col justify-between  ">
          <h2 className="text-textPrimary font-medium text-xl">Stand Out from the crowd </h2>
          <p className="text-textPrimary text-xs font-normal">Take HackerRank certification test and  make your profile stand out</p>
          <div className="">
          <button className="button bg-transparent text-textPrimary font-medium text-sm px-3  w-fit py-[6px]   custom-shadow-white  hover:border-none hover:bg-gray-500 rounded-md">
              View all ceritification
            </button>
          </div>
        </div>)
      }

    </>
  )
}
