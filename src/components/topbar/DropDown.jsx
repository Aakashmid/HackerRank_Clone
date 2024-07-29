import React from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { 'name': 'Profile', 'link': 'profile' }, { 'name': 'Dark Mode', 'link': '/' }, { 'name': 'LeaderBoard', 'link': '/' }, { 'name': 'Settings', 'link': '/' }, { 'name': 'Bookmarks', 'link': '/' }, { 'name': 'Network', 'link': '/' }, { 'name': 'Submissions', 'link': '/' }, { 'name': 'Adminstration', 'link': '/' }, { 'name': 'Logout', 'link': 'logout' }
]

export default function DropDown({ handlePageName, handleMenuState }) {
  return (
    <div className="">
      <div className='bg-bg4 absolute top-12 w-[195px] right-0 px-4 py-3'>
        <div className=""><button className='w-full hover:font-medium bg-buttonBg2 font-thin p-2'>Hackos : 2000</button></div>
        <ul className="flex flex-col mt-4 space-y-2">
          {navLinks.map((obj, id) => {
            return (
              <li key={id} className=''>
                <div className="w-full bg-gray-700 h-[1px] mb-2"></div>
                <Link onClick={() => { handleMenuState(); handlePageName(obj.name) }} to={obj.link} className='text-gray-200  text-sm  hover:font-medium hover:text-textPrimary hover:text-[15px] '>
                  {obj.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
