import { ChevronLeft, ChevronRight} from "@mui/icons-material"
import ContestCard from './ContestCard'
import { Link } from "react-router-dom";

import {  useRef } from "react"


export default function ScrollableContestsBox({ name, allContests }) {
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


    return (
        <>
            <div className="contests-header flex item-center justify-between">
                <h3 className="title text-[19px] font-medium text-white">{name} Contests</h3>
                <Link className="px-5 py-2 rounded-md outline outline-1  text-white text-sm font-medium">View All</Link>
            </div>
            <div className="contests-wrapper py-6 relative">
                {/* {scrollRef.current.scrollLeft > 0 && ( */}
                <div className="flex justify-start items-center contests-bg contests-bg-left  w-32  h-full absolute -left-20">
                    <button onClick={() => handleScrollValue('left')} className="left-scroll-btn  bg-bg4  rounded-[50%] px-[10px] py-2"><ChevronLeft htmlColor="white" /></button>
                </div>
                {/* )
                        } */}
                <div className="flex justify-end items-center contests-bg contests-bg-left   w-32   h-full absolute -right-20   ">
                    <button onClick={() => handleScrollValue('right')} className="left-scroll-btn  bg-bg4  rounded-[50%] px-[10px] py-2"><ChevronRight htmlColor="white" /></button>
                </div>

                <div ref={scrollRef} className="flex items-center overflow-x-scroll space-x-8 hide-scrollbar ">

                    {allContests.map((item, index) => {
                        if (index % 2 === 0) {
                            const nextItem = allContests[index + 1]
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
        </>
    )
}
