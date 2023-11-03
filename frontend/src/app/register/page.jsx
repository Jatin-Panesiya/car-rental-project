import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'
const page = () => {
  return (
    <div>
      <Header/>
      <h1>Register Page</h1>
      <Link href={'login'}>Already a User ? Login Here</Link>
    </div>
  )
}

export default page
