"use client"

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import logo from '@/assets/images/logo.png'


const Header = () => {
    const headerData = [
        {
            linkName: 'Home',
            linkPath: '/'
        },
        {
            linkName: 'Cars',
            linkPath: 'carListing'
        },
        {
            linkName: 'Profile',
            linkPath: 'profile'
        },
        {
            linkName: 'About',
            linkPath: 'about'
        },
        {
            linkName: 'Login',
            linkPath: 'login'
        }
    ];
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    
    return (    
        <div >
            <div className='flex items-center z-10 gap-5 bg-transparent shadow-md  px-5 py-5  justify-between fixed w-full '>
                {/* Logo*/}


                <div className=''>
                    <h1 className='poppins-bold text-3xl flex items-center text-emerald-500 uppercase'>J&P Cars</h1>
                </div>


                {/* desktop menu*/}

                <div className='hidden sm:flex gap-5 text-xl '>
                    {headerData.map(({ linkName, linkPath }, i) => {
                        return (
                            <Link key={i} className='hover:text-emerald-500 ' href={linkPath}>{linkName}</Link>
                        )
                    })}
                </div>

                {/* mobile menu*/}
                {isMenuOpen ?
                    <div className='grid absolute bg-slate-100 text-center text-black left-0 justify-center top-14 w-full sm:hidden gap-5  py-3 text-xl'>
                        {headerData.map(({ linkName, linkPath }, i) => {
                            return (
                                <Link key={i} className='hover:text-emerald-500' href={linkPath}>{linkName}</Link>
                            )
                        })}
                    </div>

                    : null}

                {/* three bar label */}
                <label className=" btn-circle swap swap-rotate sm:hidden ">

                    <input type="checkbox" onClick={() => setIsMenuOpen(!isMenuOpen)} />

                    <svg className="swap-off" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" /></svg>

                    <svg className="swap-on " xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 512 512"><polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" /></svg>

                </label>
            </div>
        </div>
    )
}

export default Header
