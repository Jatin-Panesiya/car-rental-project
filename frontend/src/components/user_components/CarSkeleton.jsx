import React from 'react'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
const CarSkeleton = () => {
  return( 
    <>

    <div className='grid gap-1'>
  <Skeleton width={360} baseColor="#202020" highlightColor="#444" height={200} />
  <Skeleton width={360} baseColor="#202020" highlightColor="#444"   height={35} />
  </div>
  </>
  )
  
}

export default CarSkeleton
