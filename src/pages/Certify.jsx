import PageHeader from "../components/PageHeader";

function Certify() {
    return (
        <div className="certify-container bg-background min-h-[100vh] w-full">
            <PageHeader pageName="Certification Tests" heading="Get Certified" bookmarkedChanllenges={false} />
            <div className="banner-wrapper bg-gradient-to-br from-blue-800  to-blue-600  ">
                <div className=" flex flex-wrap  xl:w-10/12 2xl:w-[70%] w-full  mx-auto  px-5 py-5  ">
                    <div className="md:w-[300px] md:pr-5 flex-grow pb-4 md:pb-0">
                        <h2 className="banner-heading text-lg text-white font-medium">Standout form the crowd</h2>
                        <p className="banner-text text-white text-[15px]">
                            Get certified in technical skills by taking the HackerRank Certification Test
                        </p>
                    </div>
                    <div className="md:w-[300px] md:pr-5 flex-grow pb-4 md:pb-0">
                        <h2 className="banner-heading text-lg text-white font-medium">Standout form the crowd</h2>
                        <p className="banner-text text-white text-[15px]">
                            Get certified in technical skills by taking the HackerRank Certification Test
                        </p>
                    </div>
                    <div className="md:w-[300px] md:pr-5 flex-grow pb-4 md:pb-0">
                        <h2 className="banner-heading text-lg text-white font-medium">Standout form the crowd</h2>
                        <p className="banner-text text-white text-[15px]">
                            Get certified in technical skills by taking the HackerRank Certification Test
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Certify