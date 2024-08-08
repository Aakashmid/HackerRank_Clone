import CertificationCard from "../components/dashboard/CertificationCard";
import PageHeader from "../components/PageHeader";
import { rolesCertifications,skillCertifications } from "../DummyData/CertifyPageData";

function Certify() {
    return (
        <div className="certify-container bg-page_background min-h-[100vh] w-full">
            <PageHeader pageName="Certification Tests" heading="Get Certified" bookmarkedChanllenges={false} />
            <div className="banner-wrapper bg-gradient-to-r from-[#193b84]  to-[#037bc1]  ">
                <div className=" flex flex-wrap  lg:w-[95%] xl:w-[1240px] w-full  mx-auto  px-5 py-10  ">
                    <div className="md:w-[300px] md:pr-5 flex-grow pb-7 md:pb-0">
                        <h2 className="banner-heading  text-stone-200 font-medium pb-2">Standout form the crowd</h2>
                        <p className="banner-text text-stone-200 text-[13px]">
                            Get certified in technical skills by taking the HackerRank Certification Test
                        </p>
                    </div>
                    <div className="md:w-[300px] md:pr-5 flex-grow pb-7 md:pb-0">
                        <h2 className="banner-heading  text-stone-200 font-medium pb-2">Standardised Assessment</h2>
                        <p className="banner-text text-stone-200 text-[13px]">
                        Assessments are organised around specific skills and are carefully curated based on years of recruiting data from 2000+ companies
                        </p>
                    </div>
                    <div className="md:w-[300px] md:pr-5 flex-grow pb-5 md:pb-0">
                        <h2 className="banner-heading  text-stone-200 font-medium pb-2">Enrich your profile</h2>
                        <p className="banner-text text-stone-200 text-[13px]">
                        Upon successfully clearing an assessment, you can promote yourself using the HackerRank certificate to peers and employers
                        </p>
                    </div>
                </div>
            </div>
            <div className="content lg:w-[95%] xl:w-[1240px] w-full  mx-auto  p-5 mt-4">
                <div className="role-certifications">
                    <h2 className="text-xl text-white">Get Your Role Certified</h2>
                    <div className="grid md:grid-cols-3  gap-12 lg:gap-[52px] py-4   ">
                        {rolesCertifications.map((obj,id)=>{
                            return (<CertificationCard key={id} topicName={obj.name} />)
                        })}
                    </div>
                </div>
                <div className="skill-certifications mt-4">
                    <h2 className="text-xl text-white">Get Your Role Certified</h2>
                    <div className="grid md:grid-cols-3  gap-12 lg:gap-[52px] py-4   ">
                        {skillCertifications.map((obj,id)=>{
                            return (<CertificationCard key={id} topicName={obj.name} />)
                        })}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Certify