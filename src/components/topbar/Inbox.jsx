import { Link } from "react-router-dom";

export default function Inbox() {
  return (
    <div className="notify-messages w-[450px] custom-shadow-white">
      <header className="header py-[10px] bg-bg2 z-20">
        <p className="text-center text-white text-[13px] font-medium"><strong>Messages</strong></p>
      </header>
      <ul className="flex flex-col py-[10px] px-5 bg-card_hover_bg">
        <li className="notify-item flex ">
          <img src="assets/defaultProfile.jpg" className="w-[50px] rounded" alt=".." />
          <div className="detail  ml-4 flex-grow">
            <div className="flex items-center justify-between mb-[10px] ">
              <h4 className="text-sm text-white font-medium">Aakash</h4>
              <span className="messaged-time text-xs text-gray-400">10 months ago</span>
            </div>
            <p className="message-text text-gray-300 text-xs break-words">Hii</p>
          </div>
        </li>
      </ul>

      <footer className="border-t border-gray-500 text-center bg-card_hover_bg font1 py-[10px] text-[#b5c0d0]">
        <Link to={'/inbox'} className="hover:underline" >Show All</Link>
      </footer>
    </div>
  )
}
