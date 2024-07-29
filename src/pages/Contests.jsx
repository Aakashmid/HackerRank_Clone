import PageHeader from "../components/PageHeader"

export default function Contests() {
    return (
        <div className='contests-container bg-page_background min-h-[100vh] w-full'>
            <PageHeader pageName="All Contests" heading="Contests" bookmarkedChanllenges={false} />
            {/* <div className="contests-wrapper  xl:w-10/12 2xl:w-[70%] w-full  mx-auto  px-5 bg-gray-300 ">

            </div> */}
        </div>
    )
}
