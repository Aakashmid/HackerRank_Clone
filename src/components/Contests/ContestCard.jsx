
export default function ContestCard({contestName,contestTime,activeContest}) {
    return (
        <div className={`cursor-pointer contest-card bg-bg3 p-7 md:p-6  hover:bg-card_hover_bg rounded-xl  flex flex-col  border-t-[3px] ${ activeContest ? 'border-green-800':'border-white'} w-full`}> 
            <h2 className="text-white font-medium ">{contestName}</h2>
            <p className="text-[11px] text-textSecondary mt-1">{contestTime.getDate()}</p>
            <div className="mt-5">
                <button className="button bg-transparent text-white font-medium text-sm px-3  w-fit py-[6px]   custom-shadow-white  hover:border-none hover:bg-gray-500 rounded-md">
                    {activeContest ? 'View Details':'View Challenge'}
                    
                </button>
            </div>
        </div>
    )
}
