import CertificationCard from "../components/dashboard/CertificationCard";
import PageHeader from "../components/PageHeader";

function Certify() {
    return (
        <div className="certify-container bg-background min-h-[100vh] w-full">
            <PageHeader pageName="Certification Tests" heading="Get Certified" bookmarkedChanllenges={false} />
            <div className="banner-wrapper bg-gradient-to-r from-blue-800  to-sky-600 py-4 ">
                <div className=" flex flex-wrap  xl:w-10/12 2xl:w-[70%] w-full  mx-auto  p-5  ">
                    <div className="md:w-[300px] md:pr-5 flex-grow pb-4 md:pb-0">
                        <h2 className="banner-heading text-lg text-white font-medium">Standout form the crowd</h2>
                        <p className="banner-text text-white md:text-xs mt-[2px]">
                            Get certified in technical skills by taking the HackerRank Certification Test
                        </p>
                    </div>
                    <div className="md:w-[300px] md:pr-5 flex-grow pb-4 md:pb-0">
                        <h2 className="banner-heading text-lg text-white font-medium">Standout form the crowd</h2>
                        <p className="banner-text text-white md:text-xs mt-[2px]">
                            Get certified in technical skills by taking the HackerRank Certification Test
                        </p>
                    </div>
                    <div className="md:w-[300px] md:pr-5 flex-grow pb-4 md:pb-0">
                        <h2 className="banner-heading text-lg text-white font-medium">Standout form the crowd</h2>
                        <p className="banner-text text-white md:text-xs mt-[2px]">
                            Get certified in technical skills by taking the HackerRank Certification Test
                        </p>
                    </div>
                </div>
            </div>
            <div className="content xl:w-10/12 2xl:w-[70%] w-full  mx-auto  p-5 mt-4">
                <div className="role-certifications">
                    <h2 className="text-xl text-white">Get Your Role Certified</h2>
                    <div className="flex flex-wrap  ">
                        <CertificationCard topicName={'python'} />
                        <CertificationCard topicName={'python'} />
                        <CertificationCard topicName={'python'} />
                        <CertificationCard topicName={'python'} />
                        <CertificationCard topicName={'python'} />
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Certify