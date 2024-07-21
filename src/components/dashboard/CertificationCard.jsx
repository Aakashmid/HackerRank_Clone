
export default function CertificationCard({ topicName }) {
  return (
    <>
      {topicName ? (
        <div className="md:w-[31%] bg-bg3 md:p-6 p-5 w-full  rounded-xl">
          <h2 className="text-textPrimary font-medium text-lg">{topicName}</h2>
          <div className="">
            <button className="button bg-transparent text-textPrimary font-medium text-[13px] px-3  w-fit py-2 border border-white  hover:border-none hover:bg-gray-500 rounded-lg">
              Get Certified
            </button>
          </div>
        </div>
      ) :

        (<div className="md:w-[32%] bg-[#0b13443f] md:p-6 p-5 w-full  rounded-xl custom-shadow ">
          <h2 className="text-textPrimary font-medium text-[16px]">Stand Out from the crowd </h2>
          <div className="">
            <button className="button bg-transparent text-textPrimary font-medium text-[13px] px-3  w-fit py-2 border   hover:border-none hover:bg-gray-500 rounded-lg">
              Get Certified
            </button>
          </div>
        </div>)
      }

    </>
  )
}
