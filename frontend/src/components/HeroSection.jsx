import React from 'react'
import BMW from '@/assets/images/bmwX5.png'
import Image from 'next/image'

const HeroSection = () => {
    return (
        <div>
            <div>HeroSection</div>
            <div className='flex items-center justify-between pt-10'>
                <h1 >Welcome to J&P Cars</h1>
                <Image src={BMW} alt='ferrari img' width={600} />
            </div>
        </div>

    )
}

export default HeroSection