
export default function PageHeader({pageName,heading,bookmarkedChanllenges}) {
    return (<>
        <div className="pageHeader bg-gray-900 md:bg-bg3  w-full border-b md:border-none border-borderColor mt-0">
            <div className="xl:w-10/12 2xl:w-[70%]  mx-auto flex justify-between items-baseline px-5 py-4 lg:py-6">
                <div className="HeaderRight text-left">
                    <span className="text-textSecondary text-xs hidden md:block ">{pageName}</span>
                    <h1 className="text-textPrimary font-semibold text-[1.4em]">{heading}</h1>
                </div>
                <div className="hidden md:block">
                    {bookmarkedChanllenges && <a href="/" className="hover:underline active:underline text-thirdText text-sm">Bookmarked Challenges</a>}
                </div>
            </div>
        </div>
    </>
    )
}
