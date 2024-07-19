import {  ChatBubbleOutline, NotificationsNone } from "@mui/icons-material"

export default function Topbar() {
    return (
        <div className="topbar">
            <div className="px-4 py-3 topbarWrapper  bg-background flex justify-between items-center">
                <div className="menu flex flex-col space-y-1.5 md:hidden">
                    <div className="row w-6 h-0.5  bg-white"></div>
                    <div className="row w-6 h-0.5  bg-white"></div>
                    <div className="row w-6 h-0.5  bg-white"></div>
                </div>
                <span className="logo"><img src="assets/logo.png" className="w-[150px]" alt="" /></span>

                <ul className="nav-links"><li></li>
                </ul>
                <div className="topbar-icons flex items-center p-1 space-x-3 text-white">
                    <span className=""><ChatBubbleOutline fontSize="medium" /></span>
                    <span className=""><NotificationsNone fontSize="medium" /></span>
                </div>
            </div>
        </div>
    )
}
