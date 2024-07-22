import React from 'react'

import { footerLinks } from '../DummyData/DummyData'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className='w-full bg-background px-4 pt-14'>
            <div className="w-fit flex items-center mx-auto p-2  flex-wrap">
                {footerLinks.map((link, id) => {
                    return (
                        <div className="flex items-center " key={id}>
                            <Link to={link.link} className='text-blue-700 text-sm'>
                                {link.name}
                            </Link>
                            {id!==(footerLinks.length-1) && <div className="w-[1px] h-3 mx-2 bg-slate-500"></div>}
                        </div>
                    )
                }
                )
                }
            </div>
        </footer>
    )
}
