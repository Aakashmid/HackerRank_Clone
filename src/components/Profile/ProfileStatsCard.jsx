import { ArticleRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

export default function ProfileStatsCard({ title, content, link }) {
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
