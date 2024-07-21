

export default function PreparationCard({ prepName }) {
  return (
    <>
      <div className="bg-bg3 md:p-6 p-5 w-full md:w-[48%] rounded-xl flex flex-col space-y-3">
        <p className="text-gray-400  text-[13px]">PREPARE BY TOPICS</p>
        <h2 className="text-textPrimary font-medium text-[22px]">{prepName}</h2>
        <div className="">
          <button className="bg-buttonBg hover:bg-green-200 font-medium text-sm p-3 rounded-lg">Continue Preparation</button>
        </div>
      </div>

    </>
  )
}
