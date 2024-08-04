import { Link } from "react-router-dom"
import PageHeader from "../components/PageHeader"
import { CollegeContests, ArchivedContests } from "../DummyData/contestPageData"
import ContestCard from "../components/Contests/ContestCard"
import { ChevronLeft, ChevronRight, Score } from "@mui/icons-material"
import { useEffect, useRef } from "react"


export default function Contests() {

    const scrollRef = useRef(0); // Step 2: Create a ref

    const handleScrollValue = (direction) => {
        const containerWidth = scrollRef.current.offsetWidth;
        const scrollAmount = containerWidth * 0.7;
        // const scrollAmount =400;
        if (direction === 'right') {
            scrollRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' }); // Adjust scroll position to the right
        } else if (direction === 'left') {
            scrollRef.current.scrollBy({ left: -scrollAmount, behavior: 'smooth' }); // Adjust scroll position to the left
        }
    };

    // useEffect(()=>{
    //         document.getElementById('archived_contests').scrollBy({left:ScrollValue,behavior:'smooth'});
    // },[ScrollValue])


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
                    <div className="contests-wrapper mt-6 relative">
                        {/* {scrollRef.current.scrollLeft > 0 && ( */}
                            <div className="flex justify-center items-center contests-bg contests-bg-left from-page_background to-transparent  w-28  h-full absolute -left-20   ">
                                <button onClick={() => handleScrollValue('left')} className="left-scroll-btn bg-bg4  rounded-[50%] px-[10px] py-2"><ChevronLeft htmlColor="white" /></button>
                            </div>
                            {/* )
                        } */}
                        <div className="flex justify-center items-center contests-bg contests-bg-left bfrompage_background  to-transparent w-28  h-full absolute -right-20   ">
                            <button onClick={() => handleScrollValue('right')} className="left-scroll-btn bg-bg4  rounded-[50%] px-[10px] py-2"><ChevronRight htmlColor="white" /></button>
                        </div>

                        <div ref={scrollRef} className="flex items-center overflow-x-scroll space-x-8 hide-scrollbar ">

                            {ArchivedContests.map((item, index) => {
                                if (index % 2 === 0) {
                                    const nextItem = ArchivedContests[index + 1]
                                    return (
                                        // <div className="flex flex-col space-y-4 w-[320px]">
                                        <div key={index} className="">
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
