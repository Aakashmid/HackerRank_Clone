
export default function CertificationCard({ topicName }) {
  return (
    <>
      {topicName ? (
        <div className="md:w-[31%]  bg-bg3 md:p-6 p-5 w-full  rounded-xl h-40 flex flex-col justify-between ">
          <h2 className="text-textPrimary font-medium text-lg ">{topicName}</h2>
          <div className="">
            <button className="button bg-transparent text-textPrimary font-medium text-[14px] px-2  w-fit py-1  custom-shadow-white  hover:border-none hover:bg-gray-500 rounded-md">
              Get Certified
            </button>
          </div>
        </div>
      ) :

        (<div className="md:w-[31%]  bg-[#15172b5d] md:p-6 p-5 w-full  rounded-xl custom-shadow-darkb h-40 flex flex-col justify-between  ">
          <h2 className="text-textPrimary font-medium text-[16px] ">Stand Out from the crowd </h2>
          <p className="text-textPrimary text-xs font-normal">Take HackerRank certification test and  make your profile stand out</p>
          <div className="">
            <button className="button bg-transparent text-textPrimary font-medium text-[14px] px-2  w-fit py-1 custom-shadow-white   hover:border-none hover:bg-gray-500 rounded-md">
              Get Certified
            </button>
          </div>
        </div>)
      }

    </>
  )
}
