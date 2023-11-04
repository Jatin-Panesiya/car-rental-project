import React from 'react'
import BMW from '@/assets/images/bmwX5.png'
import RR from '@/assets/images/RR.png'
import Image from 'next/image'
import Link from 'next/link'
const HeroSection = () => {
    return (
        <div>
            <div className='grid sm:flex bg-gradient-to-b from-slate-50 to-[#87C4FF] items-center justify-between pt-10 h-screen'>
                <div>
                    <span className='flex  items-center gap-2 text-3xl px-3'><p> Unlock Your Journey with </p> <p className= 'poppins-bold text-red-500 uppercase font-bold'>J & P Cars</p> </span>
                    <Link className='bg-blue-500 text-white px-3 py-1 rounded-lg' href={'carListing'}>Exlpore Cars</Link>
                </div>
                <div>
                    <Image src={RR} alt='ferrari img' className='w-[550px] m-auto' width={0} />
                </div>
            </div>
        </div>

    )
}

export default HeroSection