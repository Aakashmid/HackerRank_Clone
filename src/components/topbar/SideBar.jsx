import { sideBarLinks } from "../../DummyData/DummyData"
import { Link } from "react-router-dom"

export default function SideBar({hanldeSidebarState}) {
    return (
        <>
            <div className="mobile-sidebar w-[100vw] h-[100vh] md:hidden bg-gray-50 fixed -left-full translate-x-full   z-10 " >
                <ul className="flex flex-col pt-4  ">
                    {sideBarLinks.map((obj, id) => {
                        return (<>
                            <li key={id} className=" flex" onClick={hanldeSidebarState}><Link to={obj.link} className="text-gray-600 hover:bg-gray-200 active:bg-blue-200 font-light px-5 py-2 flex-grow text-[17px]">{obj.name}</Link></li>
                            {id === ((sideBarLinks.length / 2) - 1) && <><hr className="my-2 bg-black" /></>}
                        </>
                        )
                    })}
                </ul>
                <hr className="bg-black my-2" />
                <li  className="flex">
                    <Link to={'#'} className="text-thirdText px-5 py-2 hover:bg-gray-200 active:bg-blue-200 flex-grow ">Logout</Link>
                </li>
            </div >
        </>
    )
}
