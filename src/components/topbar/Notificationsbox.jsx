import { Link } from "react-router-dom";

export default function Notificationsbox() {
    return (
        <div className="notifications w-[450px] custom-shadow-white">
            <header className="header p-[10px] bg-bg2 flex items-center justify-between">
                <p className="text-center text-white text-[13px] font-bold">Notifications</p>
                <span className="Archive-link hover:underline text-sm text-white">Archive All</span>
            </header>
            <ul className="flex flex-col bg-card_hover_bg">
                {/* inplace of this use map for showing data of db */}

                <li className="notify-item flex py-[10px] px-5 border-b border-gray-800 "> {/* notifcation when someone followed use*/}
                    <img src="assets/profilePlus.png" className="w-[40px] h-[40px]" alt=".." />
                    <div className="detail  ml-4 flex-grow">
                        <p className="notification-text text-white text-sm break-words">Badal is now following you on HackerRank</p>
                        <p className=" text-xs text-gray-500">10 months ago</p>
                    </div>
                </li>
                <li className="notify-item flex py-[10px] px-5 border-b border-gray-800"> {/* notifcation from hackerRank*/}
                    <img src="assets/speaker.png" className="w-[29px] h-[29px]" alt=".." />
                    <div className="detail  ml-4 flex-grow">
                        <p className="notification-text text-white text-sm break-words">Get interview ready top questions for companies</p>
                        <p className=" text-xs text-gray-500">10 months ago</p>
                    </div>
                </li>
            </ul>

            <footer className=" text-center bg-[#0f1724] font1 py-[10px] text-[#b5c0d0]">
                <Link to={'/inbox'} className="hover:underline" >Show All</Link>
            </footer>
        </div>
    )
}


