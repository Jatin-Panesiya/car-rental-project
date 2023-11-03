import Header from '@/components/Header'
import Link from 'next/link'
import React from 'react'
const page = () => {
  return (
    <div>
        <Header/>   
      <h1>Login Page</h1>
      <Link href={'register'}>New User ? Register Here</Link>
    </div>
  )
}

export default page
