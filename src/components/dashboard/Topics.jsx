
import { Link } from "react-router-dom"
import { topicNames } from "../../DummyData/DummyData"

const Topic = ({ topicName, img }) => {
    return (
        <Link className="md:w-1/3  min-w-fit w-full  px-6 py-3   hover:bg-card_hover_bg ">
            <p className="text-gray-200 font-medium text-[17px]">{topicName}</p>
        </Link>

    )
}

export default function Topics() {
    return (
        <div className="flex items-center flex-wrap bg-bg3  rounded-xl mt-4 overflow-hidden">
            {topicNames.map((data, index) => {
                return (
                    <Topic key={index} topicName={data.name} />
                )
            })}
        </div>
    )
}
