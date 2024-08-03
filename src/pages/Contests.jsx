import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import { CollegeContests, ArchivedContests } from "../DummyData/contestPageData"
import ContestCard from "../components/Contests/ContestCard"


export default function Contests() {
    return (
        <div className='contests-container bg-page_background min-h-[100vh] w-full'>
            <PageHeader pageName="All Contests" heading="Contests" bookmarkedChanllenges={false} />
            <div className=" contests xl:w-10/12 2xl:w-[70%] w-full  mx-auto  px-5 ">
                <div className="active-contest mt-8">
                    <h3 className="title text-[19px] font-medium text-white">Active Contests</h3>
                    {/* show here active contest  */}

                    {/* if active contest are not  */}
                    <p className="text-white text-[15px] mt-5 font-light">There are no active contests at the moment. Please check back later or explore other contests.</p>
                </div>
                <div className="archived-contests mt-8">
                    <div className="archived-contest-header flex item-center justify-between">
                        <h3 className="title text-[19px] font-medium text-white">Archived Contests</h3>
                        <Link className="px-5 py-2 rounded-md outline outline-1  text-white text-sm font-medium">View All</Link>
                    </div>
                    <div className="contests-wrapper mt-6">
                        {/* <div className=" "> */}
                        <div className="flex items-center overflow-x-scroll space-x-8 hide-scrollbar">
                            {ArchivedContests.map((item, index) => {
                                if (index % 2 === 0) {
                                    const nextItem = ArchivedContests[index + 1]
                                    return (
                                        // <div className="flex flex-col space-y-4 w-[320px]">
                                        <div className="">
                                            <div className="grid  grid-rows-2  gap-6 w-[300px]">
                                                <ContestCard contestName={item.name} contestTime={item.time} />
                                                {nextItem && <ContestCard contestName={nextItem.name} contestTime={nextItem.time} />}
                                            </div>
                                        </div>
                                    )
                                }
                                return null
                            })}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
