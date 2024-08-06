import { Link } from "react-router-dom";

export default function Inbox() {
  return (
    <div className="notify-messages w-[450px] custom-shadow-white">
        <header className="header py-[10px] bg-bg2 z-20">
            <p className="text-center text-white text-sm font-medium"><strong>Messages</strong></p>
        </header>
        <ul className="flex flex-col">

        </ul>
        <footer className="text-center text-white">
            <Link to={'/inbox'} >Show all</Link>
        </footer>
    </div>
  )
}
