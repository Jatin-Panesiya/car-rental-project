import Link from 'next/link'
import React from 'react'

const Header = () => {
    const headerData = [
        {
            linkName: 'Home',
            linkPath : '/'
        },
        {
            linkName: 'Cars',
            linkPath : 'carListing'
        },
        {
            linkName: 'Login',
            linkPath : 'login'
        },
        {
            linkName: 'Profile',
            linkPath : 'profile'
        },
        {
            linkName: 'About',
            linkPath : 'about'
        },
    ];
    return (
        <div >
            <div className='flex items-center gap-5 bg-slate-300 px-5 py-3 '>
                {headerData.map(({linkName,linkPath},i)=>{
                    return(
                        <Link href={linkPath}>{linkName}</Link>
                    )
                })}
            </div>
        </div>
    )
}

export default Header
