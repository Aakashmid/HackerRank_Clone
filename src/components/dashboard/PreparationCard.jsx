import LinearProgress from '@mui/material/LinearProgress/LinearProgress'

export default function PreparationCard({ prepName, progess }) {
  return (
    <>
      <div className="bg-bg3 md:p-7 p-5 rounded-2xl flex flex-col space-y-4 hover:bg-card_hover_bg cursor-pointer">
        <p className="text-gray-400  text-[13px]">PREPARE BY TOPICS</p>
        <h2 className="text-textPrimary font-medium text-[22px] md:text-[26px]">{prepName}</h2>
        <div className=' space-y-2'>
        <LinearProgress variant="determinate" value={progess} color="success"  />
        <p className='text-sm font-semibold text-white'>{progess}%</p>
        </div>
        <div className="">
          <button className="bg-buttonBg hover:bg-green-200 font-medium text-sm p-3 rounded-lg">Continue Preparation</button>
        </div>
      </div>

    </>
  )
}
