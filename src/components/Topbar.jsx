import { ChatBubbleOutline, ExpandMore, NotificationsNone, Search, AppsOutlined, SdOutlined } from "@mui/icons-material"
import { Link } from "react-router-dom"
import DropDown from "./topbar/DropDown"
import { useEffect, useState } from "react"
import { sideBarLinks } from "../DummyData/DummyData"

export default function Topbar({ pageName, handlePageName }) {
    const [menuHidden, setMenuHidden] = useState(true)
    const [sidebarHidden, setSidebarHidden] = useState(true)

    const handleMenuState = () => {
        setMenuHidden(!menuHidden)
    }

    const hanldeSidebarState = () => {
        setSidebarHidden(!sidebarHidden)
    }

    useEffect(() => {
        if (!sidebarHidden) {
            document.body.classList.add('overflow-hidden');
        }
        else {
            document.body.classList.remove('overflow-hidden');
        }
    }, [sidebarHidden])

    const OnUpdatePageName = (keyname) => {
        handlePageName(keyname);
        pageName = keyname;
    }


    // let BtnClass = 'absolute w-full border-b -bottom-5 inset-x-0 border-2 border-buttonBg'

    return (
        <div className="topbar md:mt-0 mt-[-1px]">
            <div className=" topbarWrapper  bg-bg2  ">
                <div className="mobile-topbar px-5  md:px-10 py-3 md:py-0 flex justify-between md:hidden items-center">
                    <div className="menu flex flex-col h-5 justify-between mr-6 md:hidden" onClick={hanldeSidebarState}>
                        <div className={`row w-6 h-0.5  duration-300 bg-white  ${!sidebarHidden && 'rotate-45 translate-y-[9px] '}`}></div>
                        <div className={`row w-6 h-0.5  bg-white ${!sidebarHidden && 'hidden'}`}></div>
                        <div className={`row w-6 h-0.5  duration-300 bg-white  ${!sidebarHidden && '-rotate-45 -translate-y-[9px] '}`}></div>
                    </div>
                    <span className="logo"><img src="assets/logo.png" className="w-[138px] " alt="" /></span>
                    <div className="topbar-icons flex items-center p-1 space-x-3 text-white">
                        <span className=""><ChatBubbleOutline fontSize="small" /></span>
                        <span className=""><NotificationsNone fontSize="medium" /></span>
                    </div>
                </div>

                {/* sidebar for mobile screen */}
                {!sidebarHidden &&
                    (<div className="mobile-sidebar w-[100vw] h-[100vh] md:hidden bg-gray-50 fixed -left-full translate-x-full   z-10 ">
                        <ul className="flex flex-col pt-4  ">
                            {sideBarLinks.map((obj, id) => {
                                return (<>
                                    <li key={id} className=" flex" onClick={hanldeSidebarState}><Link to={obj.link} className="text-gray-600 hover:bg-gray-200 active:bg-blue-200 font-light px-5 py-2 flex-grow text-[17px]">{obj.name}</Link></li>
                                    {id === ((sideBarLinks.length / 2) - 1) && <><hr className="my-2 bg-black" /></>}
                                </>
                                )
                            })}
                        </ul>
                        <hr key={sideBarLinks.length} className="bg-black my-2" />
                        <li key={sideBarLinks.length + 1} className="flex">
                            <Link to={'#'} className="text-thirdText px-5 py-2 hover:bg-gray-200 active:bg-blue-200 flex-grow ">Logout</Link>
                        </li>
                    </div>)}


                <div className="larger-screen-topbar hidden md:flex justify-between items-center w-full md:px-6 lg:px-12 py-3 ">
                    <div className="leftTopbar flex items-center">
                        <div className="logo"><img src="assets/logo.png" className="w-[118px]" alt="" /></div>
                        <ul className="nav-links flex  text-textSecondary  items-center text-[13px]">
                            <li className="px-4 "><div className="h-4 w-0.5 bg-borderColor"></div></li>
                            <li className="relative">
                                <Link to='/dashboard' onClick={() => OnUpdatePageName('dashboard')} className={`px-[18px]  ${pageName === 'dashboard' ? 'text-textPrimary font-medium ' : 'hover:text-gray-200 '}`}>Prepare</Link>
                                {pageName === 'dashboard' && <div className="absolute w-full border-b -bottom-5 inset-x-0 border-2 border-buttonBg"></div>}

                            </li>
                            <li className="relative">
                                <Link to='/Certify' onClick={() => OnUpdatePageName('Certify')} className={`px-[18px]  ${pageName === 'certify' ? 'text-textPrimary font-medium ' : 'hover:text-gray-200'}`}>Certify</Link>
                                {pageName === 'Certify' && <div className="absolute w-full border-b -bottom-5 inset-x-0 border-2 border-buttonBg"></div>}
                            </li>
                            <li className="relative">
                                <Link to='/contests' onClick={() => OnUpdatePageName('compete')} className={`px-[18px]   ${pageName === 'compete' ? 'text-textPrimary font-medium ' : 'hover:text-gray-200'}`}>Compete</Link>
                                {pageName === 'compete' && <div className="absolute w-full border-b -bottom-5 inset-x-0 border-2 border-buttonBg"></div>}
                            </li>
                            <li className="relative">
                                <Link to='/apply' onClick={() => OnUpdatePageName('apply')} className={`px-[18px]   ${pageName === 'apply' ? 'text-textPrimary font-medium ' : 'hover:text-gray-200'}`}>Apply</Link>
                                {pageName === 'apply' && <div className="absolute w-full border-b -bottom-5 inset-x-0 border-2 border-buttonBg"></div>}
                            </li>
                        </ul>
                    </div>
                    <div className="rightTopbar flex items-center">
                        <div className="topBar-SeachBar bg-gray-700 p-0.5 rounded-md shadow-white mr-4 flex ">
                            <button className="text-white px-1"><Search fontSize="small" /></button>
                            <input type="text" className="bg-gray-700 text-white p-1 text-[13px] placeholder:text-gray-100 focus:outline-none w-16 lg:w-36 xl:w-44" placeholder="Search" />
                        </div>
                        <div className="flex items-center space-x-6 ">
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
                                    <DropDown />
                                </>)}


                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
