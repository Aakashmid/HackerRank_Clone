
export default function PageHeader({pageName,heading,bookmarkedChanllenges}) {
    return (<>
        <div className="pageHeader bg-[#21283a] px-5 py-4 w-full">
            <div className="lg:w-10/12 xl:w-[70%] w-full  mx-auto flex justify-between items-baseline">
                <div className="HeaderRight">
                    <span className="text-textSecondary text-xs hidden md:block ">{pageName}</span>
                    <h1 className="text-textPrimary font-semibold text-2xl">{heading}</h1>
                </div>
                <div className="hidden md:block">
                    {bookmarkedChanllenges && <p className="text-indigo-500 text-sm">Bookmarked Challenges</p>}
                </div>
            </div>
        </div>
    </>
    )
}
