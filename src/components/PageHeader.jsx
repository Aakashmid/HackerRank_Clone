import { Link } from "react-router-dom";

export default function PageHeader({ pageName, heading, bookmarkedChanllenges }) {
    return (<>
        <div className="pageHeader font1 bg-gray-900 md:bg-bg3  w-full border-b md:border-none border-borderColor -mt-[1px]">
            <div className="xl:w-10/12 2xl:w-[70%]  mx-auto flex justify-between items-center px-5 ">
                <div className="HeaderRight text-left py-5">
                    <span className="text-textSecondary text-xs hidden md:block ">{pageName}</span>
                    <h1 className="text-white  font-[600]  text-[1.4em] md:text-2xl">{heading}</h1>
                </div>
                <div>
                    {pageName === 'All Contests' && (
                        <div className="hidden md:flex contest-manage-btns  items-center justify-end gap-4 ">
                            <div className="contest-manage-btn px-5 py-2 rounded-md outline outline-1  text-white text-sm font-medium">
                                <Link>
                                    Manage a Contest
                                </Link>
                            </div> 
                            <div className="contest-manage-btn px-5 py-2 rounded-md bg-buttonBg hover:bg-buttonHover text-black text-sm font-medium ">
                                <Link>
                                    Create a Contest
                                </Link>
                            </div>
                        </div>
                    )
                    }
                    <div className="w-full flex justify-end mt-3">
                        {bookmarkedChanllenges && <a href="/" className="hover:underline active:underline text-thirdText text-[13px]">Bookmarked Challenges</a>}
                    </div>
                </div>
            </div>
        </div>
    </>
    )
}
