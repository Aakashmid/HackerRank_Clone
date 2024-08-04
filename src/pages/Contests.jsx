
import PageHeader from "../components/PageHeader"
import { CollegeContests, ArchivedContests } from "../DummyData/contestPageData"
import ScrollableContestsBox from "../components/Contests/ScrollableContestsBox"


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
                    <ScrollableContestsBox name={'Archived'} allContests={ArchivedContests} />
                </div>

                <div className="college-contests mt-8">
                    <ScrollableContestsBox name={'College'} allContests={CollegeContests} />
                </div>

            </div>
        </div>
    )
}
