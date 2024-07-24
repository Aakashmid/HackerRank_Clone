import React from 'react'
import { Link } from 'react-router-dom'

const navLinks = [
  { 'name': 'Profile' }, { 'name': 'Dark Mode' }, { 'name': 'LeaderBoard' }, { 'name': 'Settings' }, { 'name': 'Bookmarks' }, { 'name': 'Network' }, { 'name': 'Submissions' }, { 'name': 'Adminstration' }, { 'name': 'Logout' }
]

export default function DropDown() {
  return (
    <div className="">
      <div className='bg-bg4 absolute top-12 w-[195px] right-0 px-4 py-3'>
        <div className=""><button className='w-full bg-blue-400 font-thin p-2'>Hackos : 2000</button></div>
        <ul className="flex flex-col mt-4 space-y-2">
          {navLinks.map((link, id) => {
            return (
              <li key={id} className=''>
                <div className="w-full bg-gray-700 h-[1px] mb-2"></div>
                <Link to={'/'} className='text-gray-200  text-sm  hover:font-medium hover:text-textPrimary hover:text-[15px] '>
                  {link.name}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}
