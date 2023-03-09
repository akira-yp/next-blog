'use client'

import Link from 'next/link'
import useState from '../../../store'
import React from 'react'

const Navigation = () => {
  const { user } = useState()

  return (
    <header className="border-b py-5">
      <div className="container max-w-screen-xl mx-auto relative flex justify-center items-center">
        <Link href="/" className=" font-bold text-xl cursor-pointer">
          kata2*blog
        </Link>

        <div className="absolute right-5">
            {user.id ? (
              <div className="flex space-x-4">
                <Link href="/admin/profile">PROFILE</Link>
              </div>
            ) : (
              <div className="flex space-x-4">
                <Link href="/about">ABOUT</Link>
                <Link href="/auth/login">LOGIN</Link>
              </div>
            )}
        </div>
      </div>
    </header>
  )
}

export default Navigation
