
export default function PageHeader({pageName,heading,bookmarkedChanllenges}) {
    return (<>
        <div className="pageHeader bg-bg3 p-4  lg:px-5 lg:py-4 w-full border-b md:border-none border-borderColor mt-0">
            <div className="xl:w-10/12 2xl:w-[70%]  mx-auto flex justify-between items-baseline">
                <div className="HeaderRight">
                    <span className="text-textSecondary text-xs hidden md:block ">{pageName}</span>
                    <h1 className="text-textPrimary font-semibold text-[22px]">{heading}</h1>
                </div>
                <div className="hidden md:block">
                    {bookmarkedChanllenges && <a href="/" className="hover:underline active:underline text-thirdText text-sm">Bookmarked Challenges</a>}
                </div>
            </div>
        </div>
    </>
    )
}
