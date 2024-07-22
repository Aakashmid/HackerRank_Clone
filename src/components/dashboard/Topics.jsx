
import { topicNames } from "../../DummyData/DummyData"

const Topic = ({ topicName, img }) => {
    return (
        <div className="md:w-1/3  min-w-fit w-full flex items-center px-6 py-3   hover:bg-gray-700 ">
            <p className="text-gray-200 font-medium text-[17px]">{topicName}</p>
        </div>
    )
}

export default function Topics() {
    return (
        <div className="flex items-center flex-wrap bg-bg3 rounded-lg mt-4 overflow-hidden">
             {topicNames.map((data, index) => {
                return (
                    <Topic key={index} topicName={data.name} />
                )
            })}
        </div>
    )
}
