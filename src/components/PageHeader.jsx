
export default function PageHeader({pageName,heading,bookmarkedChanllenges}) {
    return (<>
        <div className="pageHeader bg-[#21283a] p-4 w-full border-b md:border-none border-borderColor mt-0">
            <div className="lg:w-10/12 xl:w-[70%] w-full  mx-auto flex justify-between items-baseline">
                <div className="HeaderRight">
                    <span className="text-textSecondary text-xs hidden md:block ">{pageName}</span>
                    <h1 className="text-textPrimary font-semibold text-[22px]">{heading}</h1>
                </div>
                <div className="hidden md:block">
                    {bookmarkedChanllenges && <a href="#" className="hover:underline active:underline text-indigo-500 text-sm">Bookmarked Challenges</a>}
                </div>
            </div>
        </div>
    </>
    )
}
