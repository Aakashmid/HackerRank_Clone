import CertificationCard from "../components/dashboard/CertificationCard";
import PageHeader from "../components/PageHeader";

function Certify() {
    return (
        <div className="certify-container bg-background min-h-[100vh] w-full">
            <PageHeader pageName="Certification Tests" heading="Get Certified" bookmarkedChanllenges={false} />
            <div className="banner-wrapper bg-gradient-to-r from-blue-800  to-blue-500  ">
                <div className=" flex flex-wrap  xl:w-10/12 2xl:w-[70%] w-full  mx-auto  px-5 py-10  ">
                    <div className="md:w-[300px] md:pr-5 flex-grow pb-7 md:pb-0">
                        <h2 className="banner-heading text-lg text-stone-200 font-medium pb-2">Standout form the crowd</h2>
                        <p className="banner-text text-stone-200 text-sm">
                            Get certified in technical skills by taking the HackerRank Certification Test
                        </p>
                    </div>
                    <div className="md:w-[300px] md:pr-5 flex-grow pb-7 md:pb-0">
                        <h2 className="banner-heading text-lg text-stone-200 font-medium pb-2">Standardised Assessment</h2>
                        <p className="banner-text text-stone-200 text-sm">
                        Assessments are organised around specific skills and are carefully curated based on years of recruiting data from 2000+ companies
                        </p>
                    </div>
                    <div className="md:w-[300px] md:pr-5 flex-grow pb-5 md:pb-0">
                        <h2 className="banner-heading text-lg text-stone-200 font-medium pb-2">Enrich your profile</h2>
                        <p className="banner-text text-stone-200 text-sm">
                        Upon successfully clearing an assessment, you can promote yourself using the HackerRank certificate to peers and employers
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