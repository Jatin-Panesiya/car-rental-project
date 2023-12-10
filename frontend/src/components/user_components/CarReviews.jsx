import React from 'react'

const CarReviews = () => {
    return (
        <div className='w-[500px]'>

            <div>
                <p>Leave a Review</p>
                <p>Your email address will not be published. Required fields are marked *</p>
            </div>
            <form>
                <span className='grid gap-2'>
                    <label className='text-lg font-semibold'>Review *</label>
                    <textarea cols="30" rows="5" placeholder='Your Review *' className='border  px-3 py-1 placeholder:text-black placeholder:dark:text-white'></textarea>
                </span>
                <div className='flex py-10 justify-between w-[500px] gap-3'>
                    
                        <input type='text' placeholder='Name *' className='border-b  px-3 py-1  w-full placeholder:text-black placeholder:dark:text-white' />
                    
                    
                        <input type='text' placeholder='Email *' className=' border-b  px-3 py-1 w-full placeholder:text-black placeholder:dark:text-white' />
                    
                </div>

                    <button className='px-10 py-2.5 text-lg border border-emerald-500 rounded-xl hover:scale-105 transition-all duration-300 '>Post Review</button>
            </form>
        </div>
    )
}

export default CarReviews