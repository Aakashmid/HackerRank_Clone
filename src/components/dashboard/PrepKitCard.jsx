import { useState } from "react"
import { Link } from "react-router-dom"

export default function PrepKitCard({ title, Preparation }) {
    const [isHovered, setIsHovered] = useState(false)
    const handleMouseHover = () => {  //handle when user hover on +1  
        setIsHovered(true)
    }
    const handleMouseLeave = () => {
        setTimeout(() => {
            setIsHovered(false)
        }, 3000);
    }


    return (
        <>
            <div className="bg-bg3 md:py-5  md:px-6 p-4   rounded-xl h-[140px] flex flex-col justify-between">
                <div className="">
                    <h2 className="text-gray-200 font-medium ">{title}</h2>
                    <p className="text-textBlueGray text-[13px] mt-2">Challenges: <span className="text-gray-200">{Preparation.challenges}</span>, Attempts: <span className="text-gray-200"> {Preparation.attempts} </span>, Mock Tests :<span className="text-gray-200"> {Preparation.mock_test} </span></p>
                </div>
                <div className="flex flex-wrap space-x-2 ">
                    <button className="px-3 py-[6px] rounded-lg bg-[#141727d5] text-blue-100 text-[13px] font-medium">Problem Solving(Basic)</button>
                    <button className="px-3 py-[6px] rounded-lg bg-[#141727d5] text-blue-100 text-[13px] font-medium">Problem Solving(Intermediate)</button>
                    <button className="text-[13px] text-gray-300 hover:text-white font-medium relative" onMouseEnter={handleMouseHover} onMouseLeave={handleMouseLeave}>+1
                        {isHovered && (
                        <div className="absolute bg-black p-2 w-44 transform  -translate-y-10  duration-1000 top-0 -right-[40px] lg:-right-[88px]  rounded-md  ">
                            <Link className="underline text-white text-[12px] ">Problem Solving(Advanced)</Link>
                        </div>
                      
                        )}
                    </button>
                </div>
            </div>
        </>
    )
}
