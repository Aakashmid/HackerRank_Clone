import { ChatBubbleOutline, ExpandMore, NotificationsNone, Search, AppsOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
import DropDown from "./topbar/DropDown"
import { useState } from "react"


export default function Topbar({ pageName }) {
    const [menuHidden, setMenuHidden] = useState(true)

    const handleMenuState = () => {
        setMenuHidden(!menuHidden)
    }

    return (
        <div className="topbar md:mt-0 mt-[-1px]">
            <div className=" topbarWrapper  bg-bg2 ">
                <div className="mobile-topbar px-4  md:px-10 py-3 md:py-0 flex justify-between md:hidden items-center">
                    <div className="menu flex flex-col space-y-1.5 mr-6 md:hidden">
                        <div className="row w-6 h-0.5  bg-white"></div>
                        <div className="row w-6 h-0.5  bg-white"></div>
                        <div className="row w-6 h-0.5  bg-white"></div>
                    </div>
                    <span className="logo"><img src="assets/logo.png" className="w-[138px] " alt="" /></span>
                    <div className="topbar-icons flex items-center p-1 space-x-3 text-white">
                        <span className=""><ChatBubbleOutline fontSize="small" /></span>
                        <span className=""><NotificationsNone fontSize="medium" /></span>
                    </div>
                </div>

                <div className="larger-screen-topbar hidden md:flex justify-between items-center w-full md:px-6 lg:px-12 py-3 ">
                    <div className="leftTopbar flex items-center">
                        <div className="logo"><img src="assets/logo.png" className="w-[118px]" alt="" /></div>
                        <ul className="nav-links flex  text-textSecondary  items-center text-[13px]">
                            <li className="px-4 "><div className="h-4 w-0.5 bg-borderColor"></div></li>
                            <li className="relative">
                                <Link to='/' className={`px-[18px]  ${pageName === 'dashboard' ? 'text-textPrimary font-medium ' : 'hover:text-gray-200'}`}>Prepare</Link>
                                {pageName === 'dashboard' && <div className="absolute w-full border-b -bottom-5 inset-x-0 border-2 border-buttonBg"></div>}

                            </li>
                            <li className="relative">
                                <Link to='/' className={`px-[18px]  ${pageName === 'certify' ? 'text-textPrimary font-medium ' : 'hover:text-gray-200'}`}>Certify</Link>
                                {pageName === 'certify' && <div className="absolute w-full border-b -bottom-5 inset-x-0 border-2 border-buttonBg"></div>}
                            </li>
                            <li className="relative">
                                <Link to='/' className={`px-[18px]   ${pageName === 'compete' ? 'text-textPrimary font-medium ' : 'hover:text-gray-200'}`}>Compete</Link>
                                {pageName === 'compete' && <div className="absolute w-full border-b -bottom-5 inset-x-0 border-2 border-buttonBg"></div>}
                            </li>
                            <li className="relative">
                                <Link to='/' className={`px-[18px]   ${pageName === 'apply' ? 'text-textPrimary font-medium ' : 'hover:text-gray-200'}`}>Apply</Link>
                                {pageName === 'apply' && <div className="absolute w-full border-b -bottom-5 inset-x-0 border-2 border-buttonBg"></div>}
                            </li>
                        </ul>
                    </div>
                    <div className="rightTopbar flex items-center">
                        <div className="topBar-SeachBar bg-gray-700 p-0.5 rounded-md shadow-white mr-4 flex ">
                            <button className="text-white px-1"><Search fontSize="small" /></button>
                            <input type="text" className="bg-gray-700 text-white p-1 text-[13px] placeholder:text-gray-100 focus:outline-none w-16 lg:w-32 xl:w-44" placeholder="Search" />
                        </div>
                        <div className="flex items-center space-x-4 ">
                            <span className="text-textSecondary p-1"><ChatBubbleOutline fontSize="small" /></span>
                            <span className="text-textSecondary p-1"><NotificationsNone fontSize="medium" /></span>

                            <div className="mx-4 h-4 w-0.5 bg-gray-400"></div>
                            <span className="p-1 text-gray-400"><AppsOutlined /></span>
                            <div className="profile-menu p-1 relative">
                                <button className="profile-btn flex items-center space-x-1 " onClick={handleMenuState}>
                                    <img src="assets/profile.png" className="profileImg w-7 h-7 rounded-[50%] border object-cover " alt="" />
                                    <i className={`text-gray-400  hover:text-white ${!menuHidden && 'text-white'}`}><ExpandMore /></i>
                                </button>
                                {!menuHidden && (<>
                                    <span className="fixed bg-black w-full h-full right-0 top-0 opacity-0" onClick={handleMenuState}></span>
                                    <DropDown/>
                                </>)}


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
