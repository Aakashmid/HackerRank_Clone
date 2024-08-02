import { ArticleRounded, Call, CallOutlined, LocationOnOutlined, MailOutlineRounded, MilitaryTech, MilitaryTechOutlined, MilitaryTechRounded, ModeSharp } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { ProfileStats } from "../DummyData/ProfilePageData";

const ProfileStatsCard = ({ title, content, link }) => {
    return (
        <div className="profile-certifications w-full bg-bg1 custom-shadow-white lg:p-[30px] rounded-lg p-5">
            <div className="title flex space-x-4 items-center">
                <ArticleRounded htmlColor="white" />
                <h2 className="text-xl  font-medium text-white">{title}</h2>
            </div>
            <p className="text-[13px] mt-2  text-gray-500">{content} {link && (<Link to={link.linkUrl} className="text-blue-500 font-medium hover:underline" onClick={() => handlePageName('Certify')}>{link.linkName}</Link>)} </p>
        </div>
    )
}

export default function Profile({ handlePageName }) {
    return (
        <div className='profile-container bg-page_background2 min-h-[100vh] w-full'>
            <div className="profile-wrapper  xl:w-10/12 2xl:w-[70%] w-full  mx-auto  px-5 min-h-[50vh] pb-6 ">\
                <div className="grid w-full md:grid-cols-3 gap-8">
                    <div className=" flex flex-col space-y-6">

                        <div className="profile-card w-full bg-bg1 custom-shadow-white lg:p-[26px] rounded-xl p-4">
                            <div className="profile-card-header flex items-center justify-between"><img src="" alt="" className="profileImg w-12 h-12 rounded-[50%] bg-white" />
                                <span className="edit-icon cursor-pointer"><ModeSharp htmlColor="white" fontSize="small" /></span></div>
                            <div className="text-white mt-8">
                                <h1 className="profile-title text-[26px] font-medium">Aakash Kumar Jha</h1>
                                <p className="profile-username text-sm text-gray-400">aakash@gmail.com</p>
                            </div>
                        </div>

                        <div className="personal-info-card bg-bg1 custom-shadow-white lg:p-[26px] rounded-xl p-4">
                            <div className="w-full flex items-center">
                                <h3 className="flex-grow text-xl font-medium text-white">Personal Informatioin</h3>
                                <span className="edit-icon cursor-pointer"><ModeSharp htmlColor="white" fontSize="small" /></span>
                            </div>
                            <ul className="flex flex-col space-y-2 mt-6">
                                <li className="flex items-center space-x-2 ">
                                    <MailOutlineRounded htmlColor="white" style={{fontSize:'14px'}} className="text-gray-500" />
                                    <p className="  text-white text-[13px]">aaakash13@gmail.com</p>
                                </li>
                                <li className="flex items-center space-x-2 ">
                                    <CallOutlined htmlColor="white" style={{fontSize:'14px'}}  className="text-gray-500"/>
                                    <p className="  text-gray-500 text-[13px]">Add your mobile number</p>
                                </li>
                                <li className="flex items-center space-x-2 ">
                                    <LocationOnOutlined htmlColor="white" style={{fontSize:'14px'}} />
                                    <p className="  text-white text-[13px]">India</p>
                                </li>
                            </ul>
                        </div>

                        <div className="resume-card custom-shadow-white rounded-xl p-4 lg:p-[26px] bg-bg1">
                            <div className="card-header flex items-center">
                                <h2 className="title text-white text-xl font-medium flex-grow">My Resume</h2>
                                <span className="text-link text-blue-600 text-sm hover:underline cursor-pointer">+ Add Resume</span>
                            </div>
                            <p className="mt-4 text-gray-500 text-[13px]">Add your resume here </p>
                        </div>
                        <div className="eeo-settings-card custom-shadow-white rounded-xl p-4 lg:p-[26px] bg-bg1 flex items-center">
                            <h2 className="title text-white text-xl font-medium flex-grow">EEO settings </h2>
                            <span className="edit-icon cursor-pointer"><ModeSharp htmlColor="white" fontSize="small" /></span>
                        </div>

                    </div>

                    <div className="w-full md:col-span-2 flex flex-col space-y-7">
                        <div className="badeges-card w-full bg-bg1 custom-shadow-white lg:p-[26px] rounded-lg p-4">
                            <div className="title text-white flex items-center space-x-4"><MilitaryTechRounded fontSize="medium" /><h2 className="text-xl  font-medium">My Badges</h2></div>
                        </div>
                        {ProfileStats.map((obj, id) => {
                            return (
                                <ProfileStatsCard key={id} title={obj.title} content={obj.content} link={obj.link} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}
