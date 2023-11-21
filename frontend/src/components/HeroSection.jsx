'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'



const HeroSection = () => {
    
    return (
        <>
            <div className='bg-img '>
                <div className='bg-gray-900 bg-opacity-50  h-screen w-full text-white '>
                    <div className='flex flex-col justify-center items-center h-screen gap-5'>
                        <p className='text-2xl sm:text-3xl lg:text-5xl  md:text-4xl font-bold font-mono uppercase'>Drive Your Dream Car Now</p>
                        <Link href={'/cars'}>book</Link>
                        <button className='bg-green-600 px-5 py-1 hover:scale-105 rounded text-lg'>Book Now</button>
                    </div>
                </div>
            </div>


        </>


    )
}

export default HeroSection