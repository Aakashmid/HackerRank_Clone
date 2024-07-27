
export default function CertificationCard({ topicName }) {
  return (
    <>
      {/* {topicName ? ( */}
        <div className="md:w-[250px] w-full m-2 md:flex-grow bg-bg3 p-7 md:p-6    rounded-xl h-40 flex flex-col justify-between ">
          <h2 className="text-textPrimary font-medium md:text-lg text-xl ">{topicName}</h2>
          <div className="">
            <button className="button bg-transparent text-textPrimary font-medium text-[14px] px-[10px]  w-fit py-[6px] md:py-[5px]  custom-shadow-white  hover:border-none hover:bg-gray-500 rounded-md">
              Get Certified
            </button>
          </div>
        </div>
      {/* ) : */}

        {/* (<div className="md:w-[250px]  bg-[#15172b5d] p-7 md:p-6  w-full  rounded-xl custom-shadow-darkb h-40 flex flex-col justify-between  ">
          <h2 className="text-textPrimary font-medium text-[16px] md:text-lg">Stand Out from the crowd </h2>
          <p className="text-textPrimary text-xs font-normal">Take HackerRank certification test and  make your profile stand out</p>
          <div className="">
            <button className="button bg-transparent text-textPrimary font-medium text-[14px] px-[10px]  w-fit py-[6px] md:py-[5px] custom-shadow-white   hover:border-none hover:bg-gray-500 rounded-md">
              Get Certified
            </button>
          </div>
        </div>)
      } */}

    </>
  )
}
